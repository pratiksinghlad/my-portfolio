// Performance monitoring utility
class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public startMeasure(name: string): void {
    if (typeof performance !== "undefined") {
      performance.mark(`${name}-start`);
    }
  }

  public endMeasure(name: string): number {
    if (typeof performance !== "undefined") {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);

      const measure = performance.getEntriesByName(name, "measure")[0];
      const duration = measure ? measure.duration : 0;

      this.metrics.set(name, duration);

      // Clean up marks and measures
      performance.clearMarks(`${name}-start`);
      performance.clearMarks(`${name}-end`);
      performance.clearMeasures(name);

      return duration;
    }
    return 0;
  }

  public getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public logMetrics(): void {
    console.table(this.getMetrics());
  }

  public reportMetric(name: string, value: number): void {
    this.metrics.set(name, value);

    // Send to analytics if in production
    if (import.meta.env.PROD) {
      // Replace with your analytics endpoint
      // sendToAnalytics(name, value);
    }
  }
}

// Web Vitals reporting (simplified version without external dependency)
export const reportWebVitals = (
  onPerfEntry?: (metric: Record<string, number | string>) => void,
) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    // Use native Performance API for basic metrics
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          onPerfEntry({
            name: entry.name,
            value: entry.duration || entry.startTime,
            type: entry.entryType,
          });
        });
      });
      observer.observe({ entryTypes: ["measure", "navigation", "paint"] });
    }
  }
};

// Image loading optimization
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Lazy loading utility
export const lazyLoad = <T>(importFn: () => Promise<T>): (() => Promise<T>) => {
  let modulePromise: Promise<T> | null = null;

  return () => {
    if (!modulePromise) {
      modulePromise = importFn();
    }
    return modulePromise;
  };
};

// Resource hints utility
export const addResourceHints = (
  urls: string[],
  rel: "preload" | "prefetch" | "dns-prefetch" = "prefetch",
) => {
  urls.forEach((url) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = url;
    if (rel === "preload") {
      link.as = "script";
    }
    document.head.appendChild(link);
  });
};

export default PerformanceMonitor;
