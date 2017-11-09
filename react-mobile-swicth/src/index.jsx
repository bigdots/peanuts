import React from "react";
require("./index.scss");

/**
 * @params checkedChildren,
 * @params defaultChecked
 * @params width
 * @params unCheckedChildren
 * @params onChange
 */

class MobileSwitch extends React.Component {
  constructor(props) {
    super(props);

    let defaultVal = false;
    if (typeof props.checked !== "undefined") {
      defaultVal = props.checked;
    } else if (typeof props.defaultChecked !== "undefined") {
      defaultVal = props.defaultChecked;
    }

    this.state = {
      checked: defaultVal
    };
  }

  handleClick = (onChange, checked) => {
    if (typeof this.props.checked === "undefined") {
      this.setState({
        checked: !checked
      });
    }
    onChange(!checked);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.state.checked) {
      this.setState({
        checked: nextProps.checked
      });
    }
  }

  render() {
    let {
      checkedChildren,
      height,
      unCheckedChildren,
      onChange,
      unCheckedBg,
      checkedBg,
      style,
      className
    } = this.props;

    checkedChildren = checkedChildren || null;
    unCheckedChildren = unCheckedChildren || null;
    height = height || 44;
    onChange = onChange || function() {};
    unCheckedBg = unCheckedBg || "rgba(0,0,0,0.25)";
    checkedBg = checkedBg || "#108ee9";
    className = className || "";

    let checked = this.state.checked;

    return (
      <span
        className={`mobile-switch ${checked
          ? "mobile-switch-checked"
          : ""} ${className}`}
        tabIndex="0"
        onClick={() => this.handleClick(onChange, checked)}
        style={{
          ...style,
          transform: `scale(${height / 22})`,
          backgroundColor: checked ? checkedBg : unCheckedBg
        }}
      >
        <span className="mobile-switch-inner">
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </span>
    );
  }
}
