import React, { JSXElementConstructor, PropsWithChildren, useEffect } from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  // eslint-disable-next-line
  wrapperTag?: JSXElementConstructor<any>;
  // eslint-disable-next-line
  childTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  // eslint-disable-next-line
  onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const transitionDuration = props.transitionDuration || 400;
  const delay = props.delay || 50;
  const WrapperTag = props.wrapperTag || "div";
  const ChildTag = props.childTag || "div";
  const visible = typeof props.visible === "undefined" ? true : props.visible;

  const childrenCount = React.Children.count(props.children);

  useEffect(() => {
    if (props.onComplete) {
      const totalDuration = childrenCount * delay + transitionDuration;
      const timeout = setTimeout(() => {
        props.onComplete?.();
      }, totalDuration);
      return () => clearTimeout(timeout);
    }
  }, [visible, childrenCount, delay, transitionDuration, props.onComplete]);

  return (
    <WrapperTag className={props.className}>
      {React.Children.map(props.children, (child, i) => {
        return (
          <ChildTag
            className={props.childClassName}
            style={{
              transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
              transitionDelay: `${i * delay}ms`,
              transform: visible ? "none" : "translateY(20px)",
              opacity: visible ? 1 : 0,
            }}
          >
            {child}
          </ChildTag>
        );
      })}
    </WrapperTag>
  );
}
