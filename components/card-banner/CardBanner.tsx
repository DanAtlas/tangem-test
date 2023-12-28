import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CardBanner.module.scss';

const CardBanner = () => {
  const [isCardBannerActive, setIsCardBannerActive] = useState(false);
  const [isCardBannerShown, setIsCardBannerShown] = useState(false);

  const onScroll = () => {
    const position = window.scrollY;
    const headerBanner = document.getElementById('header-banner')!;
    const yOffset = headerBanner.getBoundingClientRect().bottom + window.scrollY;

    if(yOffset < position) {
      setIsCardBannerShown(true);
    } else {
      setIsCardBannerShown(false);
    }
  };
  
  useEffect(() => {
    const cardBanner = localStorage.getItem('card-banner-hidden');

    if (!cardBanner) {
      setIsCardBannerActive(true);
    } else {
      setIsCardBannerActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isCardBannerActive, isCardBannerShown]);

  const onCardBannerClose = () => {
    setIsCardBannerActive(false);
    localStorage.setItem('card-banner-hidden', JSON.stringify(isCardBannerActive));
  }

  return (
    <div className={[
      styles['card-banner'], 
      styles[isCardBannerShown ? 'card-banner--is-shown': ''], 
      styles[isCardBannerActive ? 'card-banner--active': '']
    ].join(' ')}>
      <button className={styles['card-banner__close']} onClick={onCardBannerClose}>
        <Image
          width={24}
          height={24}
          quality={100}
          src={'/close-icon.svg'}
          alt={'Close icon'}
        />
      </button>
      <div className={styles['card-banner__content']}>
        <h1 className={styles['card-banner__title']}>Black Friday</h1>
        <h2 className={styles['card-banner__discount']}>10%OFF</h2>
        <p className={styles['card-banner__code']}>Use code <span className="checkout-code">10FRIDAY</span> at checkout</p>
        <Link href={'/'}>
          <a className={styles['card-banner__link']} title={'Opens the Shop page'}>Shop now<span className={styles['hide-on-mobile']}> through Monday</span></a>
        </Link>
      </div>
    </div>
  );
}

export default CardBanner;
