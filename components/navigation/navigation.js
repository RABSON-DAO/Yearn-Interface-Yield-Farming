import React, { useState, useEffect } from "react";
import { Typography, Paper, Switch, Button, SvgIcon } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BarChartIcon from "@material-ui/icons/BarChart";

import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";

import Unlock from "../unlock";

import stores from "../../stores";
import { formatAddress } from "../../utils";

import classes from "./navigation.module.css";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
function YearnIcon(props) {
  const { color, altColor, className, width, height } = props;
  return (
    <SvgIcon
      viewBox="-7 0 53 19"
      fill="none"
      width={width}
      height={height}
      className={className}
    >
      <path 
       fill={color}
       d="M37.811 10.636l-1.534 1.53c.063.305.097.634.097.994 0 1.938-.913 3.094-2.436 3.094-.636 0-1.17-.203-1.575-.59l5.301-5.301a4.224 4.224 0 00-.722-.961l-.036-.032-.074-.067c-.769-.72-1.758-1.098-2.894-1.098-1.311 0-2.427.503-3.23 1.457-.756.896-1.176 2.138-1.176 3.498 0 .908.188 1.759.533 2.491l1.535-1.535a5.674 5.674 0 01-.078-.956c0-.886.181-1.608.538-2.14.419-.621 1.068-.946 1.878-.946.631 0 1.158.197 1.556.564l-5.29 5.292a4.531 4.531 0 00.622.864c.043.049.091.098.139.143l.016.019.044.046.004-.003c.767.734 1.766 1.119 2.909 1.119 1.315 0 2.436-.502 3.238-1.455.763-.898 1.183-2.139 1.183-3.503 0-.915-.192-1.784-.548-2.524" />
       <path
         d="M2.167 17.853l-1.73-3.38h-1.52v3.38h-1.9v-9.24h3.43c1.093 0 1.937.243 2.53.73.587.487.88 1.173.88 2.06 0 .633-.137 1.16-.41 1.58-.267.42-.68.753-1.24 1l2 3.78v.09h-2.04zm-3.25-7.7v2.77h1.54c.473 0 .843-.12 1.11-.36.26-.247.39-.583.39-1.01 0-.433-.123-.777-.37-1.03-.247-.247-.627-.37-1.14-.37h-1.53zm12.245 7.7l-.64-1.9h-3.34l-.63 1.9h-2.03l3.44-9.24h1.77l3.46 9.24h-2.03zm-2.31-6.91l-1.15 3.46h2.31l-1.16-3.46zm8.796 6.91h-3.59v-9.24h3.23c1.12 0 1.97.213 2.55.64.58.433.87 1.063.87 1.89 0 .453-.117.853-.35 1.2a2.03 2.03 0 01-.97.76c.473.113.847.35 1.12.71.273.36.41.8.41 1.32 0 .893-.283 1.567-.85 2.02-.567.46-1.373.693-2.42.7zm.06-4.02h-1.75v2.49h1.63c.447 0 .797-.107 1.05-.32.253-.213.38-.51.38-.89 0-.847-.437-1.273-1.31-1.28zm-1.75-3.68v2.33h1.41c.96-.02 1.44-.403 1.44-1.15 0-.42-.123-.72-.37-.9-.24-.187-.623-.28-1.15-.28h-1.33zm11.185 5.28c0-.36-.126-.637-.38-.83-.253-.193-.71-.397-1.37-.61-.66-.213-1.183-.423-1.57-.63-1.053-.567-1.58-1.333-1.58-2.3 0-.493.144-.937.43-1.33.28-.393.684-.7 1.21-.92.527-.22 1.117-.33 1.77-.33.66 0 1.25.12 1.77.36.514.24.914.577 1.2 1.01.287.44.43.937.43 1.49h-1.91c0-.427-.133-.757-.4-.99-.266-.233-.64-.35-1.12-.35-.466 0-.826.097-1.08.29a.94.94 0 00-.39.78c0 .3.15.553.45.76.307.2.754.39 1.34.57 1.08.327 1.87.73 2.37 1.21.494.48.74 1.08.74 1.8 0 .8-.303 1.427-.91 1.88-.606.46-1.42.69-2.44.69-.713 0-1.363-.13-1.95-.39-.58-.26-1.023-.617-1.33-1.07-.306-.453-.46-.98-.46-1.58h1.91c0 1.02.61 1.53 1.83 1.53.454 0 .807-.09 1.06-.27a.902.902 0 00.38-.77zM46.71 8.619v9.24h-1.9l-3.71-6.08v6.08h-1.9v-9.24h1.9l3.71 6.09v-6.09h1.9z"
         style={{
           whiteSpace: "pre"
         }}
       />
    </SvgIcon>
  );
}

function InvestIcon(props) {
  const { color, altColor, className } = props;
  return (
    <SvgIcon viewBox="0, 0, 24, 24" className={className}>
      <path
        fill={color}
        d="M4.99222 12.9844C4.77499 12.9842 4.5636 13.0547 4.39002 13.1853C4.21643 13.3159 4.09009 13.4994 4.0301 13.7082C3.97011 13.917 3.97973 14.1396 4.05752 14.3424C4.1353 14.5453 4.27701 14.7172 4.46122 14.8324L7.14922 17.5204C7.24213 17.6132 7.35241 17.6869 7.47378 17.7371C7.59515 17.7873 7.72522 17.8131 7.85657 17.8131C7.98792 17.813 8.11797 17.7871 8.2393 17.7368C8.36064 17.6865 8.47087 17.6128 8.56371 17.5199C8.65656 17.427 8.7302 17.3167 8.78042 17.1953C8.83064 17.0739 8.85646 16.9439 8.85642 16.8125C8.85637 16.6812 8.83045 16.5511 8.78015 16.4298C8.72984 16.3085 8.65613 16.1982 8.56322 16.1054L7.44222 14.9854H14.9922C15.2574 14.9854 15.5118 14.88 15.6993 14.6925C15.8869 14.5049 15.9922 14.2506 15.9922 13.9854C15.9922 13.7202 15.8869 13.4658 15.6993 13.2783C15.5118 13.0907 15.2574 12.9854 14.9922 12.9854H4.99222V12.9844Z"
      />
      <path
        fill={color}
        d="M19.0054 11.0162C19.2226 11.0164 19.434 10.9459 19.6076 10.8153C19.7812 10.6847 19.9075 10.5011 19.9675 10.2924C20.0275 10.0836 20.0178 9.86096 19.9401 9.65813C19.8623 9.45531 19.7206 9.28333 19.5364 9.1682L16.8484 6.4802C16.6607 6.29269 16.4063 6.18741 16.141 6.1875C15.8757 6.18759 15.6214 6.29306 15.4339 6.4807C15.2464 6.66834 15.1411 6.92279 15.1412 7.18806C15.1413 7.45333 15.2467 7.70769 15.4344 7.8952L16.5554 9.0152H9.00537C8.74015 9.0152 8.4858 9.12056 8.29826 9.3081C8.11073 9.49563 8.00537 9.74999 8.00537 10.0152C8.00537 10.2804 8.11073 10.5348 8.29826 10.7223C8.4858 10.9098 8.74015 11.0152 9.00537 11.0152H19.0054V11.0162Z"
      />
    </SvgIcon>
  );
}

function InvestIconSelected(props) {
  const { color, altColor, className } = props;
  return (
    <SvgIcon viewBox="0, 0, 48, 48" className={className}>
      <rect width="48" height="48" rx="24" fill={color} />
      <path
        fill={altColor}
        d="M16.9922 24.9844C16.775 24.9842 16.5636 25.0547 16.39 25.1853C16.2164 25.3159 16.0901 25.4994 16.0301 25.7082C15.9701 25.917 15.9797 26.1396 16.0575 26.3424C16.1353 26.5453 16.277 26.7172 16.4612 26.8324L19.1492 29.5204C19.2421 29.6132 19.3524 29.6869 19.4738 29.7371C19.5951 29.7873 19.7252 29.8131 19.8566 29.8131C19.9879 29.813 20.118 29.7871 20.2393 29.7368C20.3606 29.6865 20.4709 29.6128 20.5637 29.5199C20.6566 29.427 20.7302 29.3167 20.7804 29.1953C20.8306 29.0739 20.8565 28.9439 20.8564 28.8125C20.8564 28.6812 20.8305 28.5511 20.7801 28.4298C20.7298 28.3085 20.6561 28.1982 20.5632 28.1054L19.4422 26.9854H26.9922C27.2574 26.9854 27.5118 26.88 27.6993 26.6925C27.8869 26.5049 27.9922 26.2506 27.9922 25.9854C27.9922 25.7202 27.8869 25.4658 27.6993 25.2783C27.5118 25.0907 27.2574 24.9854 26.9922 24.9854H16.9922V24.9844Z"
      />
      <path
        fill={altColor}
        d="M31.0054 23.0162C31.2226 23.0164 31.434 22.9459 31.6076 22.8153C31.7812 22.6847 31.9075 22.5011 31.9675 22.2924C32.0275 22.0836 32.0178 21.861 31.9401 21.6581C31.8623 21.4553 31.7206 21.2833 31.5364 21.1682L28.8484 18.4802C28.6607 18.2927 28.4063 18.1874 28.141 18.1875C27.8757 18.1876 27.6214 18.2931 27.4339 18.4807C27.2464 18.6683 27.1411 18.9228 27.1412 19.1881C27.1413 19.4533 27.2467 19.7077 27.4344 19.8952L28.5554 21.0152H21.0054C20.7402 21.0152 20.4858 21.1206 20.2983 21.3081C20.1107 21.4956 20.0054 21.75 20.0054 22.0152C20.0054 22.2804 20.1107 22.5348 20.2983 22.7223C20.4858 22.9098 20.7402 23.0152 21.0054 23.0152H31.0054V23.0162Z"
      />
    </SvgIcon>
  );
}

function StatsIcon(props) {
  const { color, altColor, className } = props;
  return (
    <SvgIcon viewBox="0, 0, 24, 24" className={className}>
      <path
        d="M8.14356 15.8567H5.57056V9.42969H8.14256V15.8577L8.14356 15.8567Z"
        fill={color}
      />
      <path d="M13.2846 15.857H10.7126V3H13.2846V15.857Z" fill={color} />
      <path
        d="M18.4279 15.8574H15.8569V6.85742H18.4279V15.8574Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 20.7129H3V18.7129H21V20.7129Z"
        fill={color}
      />
    </SvgIcon>
  );
}

function StatsIconSelected(props) {
  const { color, altColor, className } = props;
  return (
    <SvgIcon viewBox="0, 0, 48, 48" className={className}>
      <rect width="48" height="48" rx="24" fill={color} />
      <path
        d="M20.1438 27.8567H17.5708V21.4297H20.1428V27.8577L20.1438 27.8567Z"
        fill={altColor}
      />
      <path d="M25.2849 27.857H22.7129V15H25.2849V27.857Z" fill={altColor} />
      <path
        d="M30.4279 27.8574H27.8569V18.8574H30.4279V27.8574Z"
        fill={altColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 32.7129H15V30.7129H33V32.7129Z"
        fill={altColor}
      />
    </SvgIcon>
  );
}

function LendIcon(props) {
  const { color, altColor, className } = props;
  return (
    <SvgIcon viewBox="0, 0, 24, 24" className={className}>
      <path
        d="M5.37227 4.51001C7.19897 2.88939 9.55729 1.99616 11.9993 2.00001C17.5223 2.00001 21.9993 6.47701 21.9993 12C22.0025 14.0439 21.3765 16.0393 20.2063 17.715L17.4993 12H19.9993C19.9993 10.4094 19.5251 8.85482 18.6374 7.53496C17.7496 6.2151 16.4886 5.18985 15.0153 4.59017C13.542 3.99049 11.9234 3.84362 10.3663 4.16831C8.80912 4.493 7.3841 5.27451 6.27327 6.41301L5.37327 4.51101L5.37227 4.51001ZM18.6263 19.49C16.7996 21.1106 14.4412 22.0039 11.9993 22C6.47627 22 1.99927 17.523 1.99927 12C1.99927 9.87501 2.66227 7.90501 3.79227 6.28501L6.49927 12H3.99927C3.99924 13.5907 4.47339 15.1452 5.36115 16.4651C6.24891 17.7849 7.50997 18.8102 8.98324 19.4099C10.4565 20.0095 12.0751 20.1564 13.6323 19.8317C15.1894 19.507 16.6144 18.7255 17.7253 17.587L18.6253 19.489L18.6263 19.49ZM12.9993 13.535H15.9993V15.535H12.9993V17.535H10.9993V15.535H7.99927V13.535H10.9993V12.535H7.99927V10.535H10.5853L8.46327 8.41401L9.87927 7.00001L11.9993 9.12101L14.1203 7.00001L15.5353 8.41401L13.4133 10.536H15.9993V12.536H12.9993V13.536V13.535Z"
        fill={color}
      />
    </SvgIcon>
  );
}

function LendIconSelected(props) {
  const { color, altColor, className } = props;
  return (
    <SvgIcon viewBox="0, 0, 48, 48" className={className}>
      <rect width="48" height="48" rx="24" fill={color} />
      <path
        d="M17.3725 16.51C19.1992 14.8894 21.5575 13.9962 23.9995 14C29.5225 14 33.9995 18.477 33.9995 24C34.0028 26.0439 33.3767 28.0393 32.2065 29.715L29.4995 24H31.9995C31.9995 22.4094 31.5254 20.8548 30.6376 19.535C29.7499 18.2151 28.4888 17.1898 27.0155 16.5902C25.5423 15.9905 23.9237 15.8436 22.3665 16.1683C20.8094 16.493 19.3843 17.2745 18.2735 18.413L17.3735 16.511L17.3725 16.51ZM30.6265 31.49C28.7998 33.1106 26.4415 34.0039 23.9995 34C18.4765 34 13.9995 29.523 13.9995 24C13.9995 21.875 14.6625 19.905 15.7925 18.285L18.4995 24H15.9995C15.9995 25.5907 16.4736 27.1452 17.3614 28.4651C18.2491 29.7849 19.5102 30.8102 20.9835 31.4099C22.4568 32.0095 24.0754 32.1564 25.6325 31.8317C27.1897 31.507 28.6147 30.7255 29.7255 29.587L30.6255 31.489L30.6265 31.49ZM24.9995 25.535H27.9995V27.535H24.9995V29.535H22.9995V27.535H19.9995V25.535H22.9995V24.535H19.9995V22.535H22.5855L20.4635 20.414L21.8795 19L23.9995 21.121L26.1205 19L27.5355 20.414L25.4135 22.536H27.9995V24.536H24.9995V25.536V25.535Z"
        fill={altColor}
      />
    </SvgIcon>
  );
}

function LTVIcon(props) {
  const { color, altColor, className } = props;
  return (
    <SvgIcon viewBox="0, 0, 24, 24" className={className}>
      <path
        fill={color}
        d="M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm6 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"
      ></path>
    </SvgIcon>
  );
}

function LTVIconSelected(props) {
  const { color, altColor, className } = props;
  return (
    <div
      style={{
        background: color,
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "12px",
      }}
    >
      <SvgIcon viewBox="0, 0, 24, 24" className={className}>
        <path
          fill={altColor}
          d="M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm6 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"
        ></path>
      </SvgIcon>
    </div>
  );
}

function CDPIcon(props) {
  const { color, altColor, className } = props;
  return (
    <SvgIcon viewBox="0, 0, 24, 24" className={className}>
      <path
        fill={color}
        d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
      ></path>
    </SvgIcon>
  );
}

function CDPIconSelected(props) {
  const { color, altColor, className } = props;
  return (
    <div
      style={{
        background: color,
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "12px",
      }}
    >
      <SvgIcon viewBox="0, 0, 24, 24" className={className}>
        <path
          fill={altColor}
          d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
        ></path>
      </SvgIcon>
    </div>
  );
}

const StyledSwitch = withStyles((theme) => ({
  root: {
    width: 58,
    height: 32,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(28px)",
      color: "#212529",
      "& + $track": {
        backgroundColor: "#ffffff",
        opacity: 1,
      },
    },
    "&$focusVisible $thumb": {
      color: "#ffffff",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 32 / 2,
    border: `1px solid #212529`,
    backgroundColor: "#212529",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function Navigation(props) {
  const router = useRouter();

  const account = stores.accountStore.getStore("account");

  const [darkMode, setDarkMode] = useState(false);
  const [unlockOpen, setUnlockOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigate(route) {
    router.push(route);
  }

  const onMenuClicked = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleChange = (event, val) => {
    setDarkMode(val);
    props.changeTheme(val);
  };

  const onAddressClicked = () => {
    setUnlockOpen(true);
  };

  const closoeUnlock = () => {
    setUnlockOpen(false);
  };

  useEffect(function () {
    const localStorageDarkMode = window.localStorage.getItem(
      "yearn.finance-dark-mode"
    );
    setDarkMode(localStorageDarkMode ? localStorageDarkMode === "dark" : false);
  }, []);

  useEffect(
    function () {
      setDarkMode(props.theme.palette.type === "dark" ? true : false);
    },
    [props.theme]
  );

  const activePath = router.asPath;
  const renderNavs = () => {
    return (
      <React.Fragment>
        {renderNav(
          "Invest",
          "invest",
          <InvestIcon
            className={classes.icon}
            color={darkMode ? "white" : "rgb(33, 37, 41)"}
            altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
          />,
          <InvestIconSelected
            className={classes.iconSelected}
            color={darkMode ? "white" : "rgb(33, 37, 41)"}
            altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
          />
        )}
        {account &&
          account.address &&
          renderNav(
            "Lend",
            "lend",
            <LendIcon
              className={classes.icon}
              color={darkMode ? "white" : "rgb(33, 37, 41)"}
              altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
            />,
            <LendIconSelected
              className={classes.iconSelected}
              color={darkMode ? "white" : "rgb(33, 37, 41)"}
              altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
            />
          )}
        {account &&
          account.address &&
          renderNav(
            "CDP",
            "cdp",
            <CDPIcon
              className={classes.icon}
              color={darkMode ? "white" : "rgb(33, 37, 41)"}
              altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
            />,
            <CDPIconSelected
              className={classes.iconHack}
              color={darkMode ? "white" : "rgb(33, 37, 41)"}
              altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
            />
          )}
        {account &&
          account.address &&
          renderNav(
            "LTV",
            "ltv",
            <LTVIcon
              className={classes.icon}
              color={darkMode ? "white" : "rgb(33, 37, 41)"}
              altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
            />,
            <LTVIconSelected
              className={classes.iconHack}
              color={darkMode ? "white" : "rgb(33, 37, 41)"}
              altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
            />
          )}
        {renderNav(
          "Stats",
          "stats",
          <StatsIcon
            className={classes.icon}
            color={darkMode ? "white" : "rgb(33, 37, 41)"}
            altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
          />,
          <StatsIconSelected
            className={classes.iconSelected}
            color={darkMode ? "white" : "rgb(33, 37, 41)"}
            altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
          />
        )}
      </React.Fragment>
    );
  };

  const renderNav = (title, link, icon, iconSelected) => {
    return (
      <div
        className={classes.navigationOptionContainer}
        onClick={() => {
          handleNavigate("/" + link);
        }}
      >
        {activePath.includes("/" + link) ||
        (activePath === "/" && link === "invest") ? (
          <div
            className={
              darkMode
                ? classes.navigationOptionSelectedWhite
                : classes.navigationOptionSelected
            }
          ></div>
        ) : (
          <div className={classes.navigationOptionNotSelected}></div>
        )}
        {activePath.includes("/" + link) ||
        (activePath === "/" && link === "invest")
          ? iconSelected
          : icon}
        <Typography variant="h2">{title}</Typography>
      </div>
    );
  };

  return (
    <Paper elevation={0} className={classes.navigationContainer}>
      <div className={classes.navigationHeading}>
        <YearnIcon
          color={darkMode ? "white" : "rgb(33, 37, 41)"}
          altColor={darkMode ? "rgb(33, 37, 41)" : "white"}
          width="123px"
          height="42.3px"
          className={classes.yearnLogo}
        />
      </div>

      <div className={classes.navigationContent}>{renderNavs()}</div>

      {menuOpen && (
        <Paper elevation={0} className={classes.navigationContentMobile}>
          <div className={classes.menuIcon}>
            <Button
              color={
                props.theme.palette.type === "light" ? "primary" : "secondary"
              }
              onClick={onMenuClicked}
              disableElevation
            >
              <CloseIcon fontSize={"large"} />
            </Button>
          </div>
          <div className={classes.navigationHeading}>
            <img src="/logo-stacked.svg" width="123px" height="42.3px" />
          </div>
          <div className={classes.navigationContentNavs}>{renderNavs()}</div>
          <div className={classes.headerThings}>
            <div className={classes.themeSelectContainer}>
              <StyledSwitch
                icon={<Brightness2Icon className={classes.switchIcon} />}
                checkedIcon={
                  <WbSunnyOutlinedIcon className={classes.switchIcon} />
                }
                checked={darkMode}
                onChange={handleToggleChange}
              />
            </div>
            <Button
              disableElevation
              className={classes.accountButton}
              variant="contained"
              color="secondary"
              onClick={onAddressClicked}
            >
              <div
                className={`${classes.accountIcon} ${classes.metamask}`}
              ></div>
              <Typography variant="h5">
                {account ? formatAddress(account.address) : "Connect Wallet"}
              </Typography>
            </Button>

            {unlockOpen && (
              <Unlock modalOpen={unlockOpen} closeModal={closoeUnlock} />
            )}
          </div>
        </Paper>
      )}

      <div className={classes.menuIcon}>
        <Button
          color={props.theme.palette.type === "light" ? "primary" : "secondary"}
          onClick={onMenuClicked}
          disableElevation
        >
          <MenuIcon fontSize={"large"} />
        </Button>
      </div>

      {props.backClicked && (
        <div className={classes.backButtonContainer}>
          <div className={classes.backButton}>
            <Button
              color={
                props.theme.palette.type === "light" ? "primary" : "secondary"
              }
              onClick={props.backClicked}
              disableElevation
            >
              <ArrowBackIcon fontSize={"large"} />
            </Button>
          </div>
        </div>
      )}

      {/* <div className={classes.socials}>
        <a
          className={`${classes.socialButton}`}
          href="https://twitter.com/iearnfinance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill={props.theme.palette.type === "light" ? "#212529" : "#FFF"}
              d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
            />
          </svg>
        </a>
        <a
          className={`${classes.socialButton}`}
          href="https://medium.com/iearn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="100%" viewBox="0 0 256 256" version="1.1">
            <g>
              <rect
                fill={props.theme.palette.type === "light" ? "#212529" : "#FFF"}
                x="0"
                y="0"
                width="256"
                height="256"
              ></rect>
              <path
                d="M61.0908952,85.6165814 C61.3045665,83.5054371 60.4994954,81.4188058 58.9230865,79.9979257 L42.8652446,60.6536969 L42.8652446,57.7641026 L92.7248438,57.7641026 L131.263664,142.284737 L165.145712,57.7641026 L212.676923,57.7641026 L212.676923,60.6536969 L198.947468,73.8174045 C197.763839,74.719636 197.176698,76.2025173 197.421974,77.670197 L197.421974,174.391342 C197.176698,175.859021 197.763839,177.341902 198.947468,178.244134 L212.355766,191.407842 L212.355766,194.297436 L144.91283,194.297436 L144.91283,191.407842 L158.802864,177.923068 C160.16778,176.558537 160.16778,176.157205 160.16778,174.070276 L160.16778,95.8906948 L121.54867,193.97637 L116.329871,193.97637 L71.3679139,95.8906948 L71.3679139,161.628966 C70.9930375,164.392788 71.9109513,167.175352 73.8568795,169.174019 L91.9219516,191.086776 L91.9219516,193.97637 L40.6974359,193.97637 L40.6974359,191.086776 L58.7625081,169.174019 C60.6942682,167.172038 61.5586577,164.371016 61.0908952,161.628966 L61.0908952,85.6165814 Z"
                fill={props.theme.palette.type === "light" ? "#FFF" : "#212529"}
              ></path>
            </g>
          </svg>
        </a>
        <a
          className={`${classes.socialButton}`}
          href="https://discord.com/invite/6PNv2nF/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill={props.theme.palette.type === "light" ? "#212529" : "#FFF"}
              d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"
            />
          </svg>
        </a>
        <a
          className={`${classes.socialButton}`}
          href="https://github.com/antonnell/yearn-finance.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill={props.theme.palette.type === "light" ? "#212529" : "#FFF"}
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </a>
      </div> */}
      <Typography className={classes.smallVersion}>Our power comes in unity, in being the voice for another when they can't yet speak.</Typography>
    </Paper>
  );
}

export default withTheme(Navigation);
