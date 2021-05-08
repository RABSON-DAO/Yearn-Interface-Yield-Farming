import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const NewbiePrimer = () => {
  return (
    <>
      <h3>Here is a primer if you are completely new to the crypto and DeFi world:</h3>
      <Typography gutterBottom>
        Simply put, RABSON's goal is to make it as easy as possible to make money on your crypto money without any effort. You just deposit your crypto assets in
        one of the vaults and you don't need to think about it anymore. Think of vaults as fancy savings accounts.
        <br /><br />
      </Typography>
      <Typography gutterBottom>
        While the old way to make money in crypto was to just "hodl" (hold) until you hit your price target, with RABSON, you get to make interest(%) while you hodl, even
        better, some of THE vaults accept stable coins pegged to the dollar or euro so you aren't subject to downturns in the market.
        <br /><br />
      </Typography>
      <Typography gutterBottom>
        If you are completely new to crypto, you first need to buy crypto money with your regular fiat money either:
        <br /><br />
      </Typography>
      <Typography gutterBottom>  
        <strong>1. </strong> Directly to your RABSON-Wallet from the <a href="https://buy.ramp.network/" target="_blank">
          RABSON Exchange, or <br /><br />
        </a>{' '}
      </Typography>
      <Typography gutterBottom>  
        <strong>2. </strong>on a centralized exchange such as Coinbase or Binance, then withdraw the crypto currency you bought to your RABSON-Wallet address. <br /><br />
      </Typography>
      <Typography gutterBottom>  
        If you are new, we recommend you buy either   :   
        Ethereum (ETH) or Dai or any other stable coin such as USDC. A minimum amount of Ethereum is mandatory to make a deposit to any of the vaults (0.1 ethereum at least to be safe).
      </Typography>
    </>
  );
};
const ProPrimer = () => {
  return (
    <>
      <h3>Already familiar with DeFi (Decentralized Finance)? Here's a primer for you:</h3>
      <Typography gutterBottom>
        RABSON Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum
        blockchain. The protocol is maintained by various independent developers and is governed by a DAO (Decentralized Autonomous Organization) of YFI token holders.
      </Typography>
    </>
  );
};
export default function AboutModal(props) {
  const { setToggleAboutModal } = props;
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setToggleAboutModal(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          How does RABSON work?
        </DialogTitle>
        {typeof web3 !== 'undefined' ? (
          <>
            <DialogContent dividers>
              <ProPrimer />
            </DialogContent>
            <DialogContent dividers>
              <NewbiePrimer />
            </DialogContent>
          </>
        ) : (
          <>
            <DialogContent dividers>
              <NewbiePrimer />
            </DialogContent>
            <DialogContent dividers>
              <ProPrimer />
            </DialogContent>
          </>
        )}
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
