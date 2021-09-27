import React, { useEffect, useState } from 'react';

import { useTheme } from '@material-ui/core';
import { Twirl as Hamburger } from 'hamburger-react';
import { useSelector } from 'react-redux';

import { ReactComponent as WalletIcon } from '~/assets/svg/minhaconta.svg';
import { LoaderComponent } from '~/components/Button/styles';
import api from '~/services/api';
import masks from '~/utils/masks';

import PopMenu from './PopMenu';
import { Container, Navigation, Title, WalletAmountContainer } from './styles';

export const WalletAmount = ({ amount, loading }) =>
  loading ? (
    <LoaderComponent
      type="ThreeDots"
      color="#2BC155"
      height={15}
      width={50}
      // 3 secs
    />
  ) : (
    <WalletAmountContainer>
      <WalletIcon className="svg-carteira" />
      {masks.currencyAllPlatforms(amount)}
    </WalletAmountContainer>
  );

const Header = ({ open, mobile, handleDrawerOpen, handleDrawerClose }) => {
  const [wallet, setWallet] = useState({});
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const { admin } = useSelector((state) => state.auth);

  async function getWallet() {
    try {
      setLoading(true);
      const { data: res } = await api.get('/transaction/balance');
      setWallet(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWallet();
  }, []);

  const hadleClickOpenClose = () => {
    if (open) handleDrawerClose();
    else {
      handleDrawerOpen();
    }
  };

  return (
    <>
      <Container open={open} themeMat={theme}>
        <Navigation>
          {mobile && (
            <Hamburger
              size={20}
              color="#00045D"
              toggled={open}
              toggle={hadleClickOpenClose}
            />
          )}
        </Navigation>
        <div style={{ display: 'flex' }}>
          {!admin && <WalletAmount amount={wallet.brl} loading={loading} />}
          <PopMenu />
        </div>
      </Container>
    </>
  );
};

export default Header;
