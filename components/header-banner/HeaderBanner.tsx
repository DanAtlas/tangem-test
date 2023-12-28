import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderBanner.module.scss';

const HeaderBanner = () => {
  const [isHeaderBannerActive, setIsHeaderBannerActive] = useState(false);
  
  useEffect(() => {
    const headerBanner = localStorage.getItem('header-banner-hidden');

    if (!headerBanner) {
      setIsHeaderBannerActive(true);
    } else {
      setIsHeaderBannerActive(false);
    }
  }, [isHeaderBannerActive]);

  const onHeaderBannerClose = () => {
    setIsHeaderBannerActive(false);
    localStorage.setItem('header-banner-hidden', JSON.stringify(isHeaderBannerActive));
  }

  return (
    <div id="header-banner" className={[styles['header-banner'], styles[isHeaderBannerActive ? 'header-banner--active': '']].join(' ')}>
      <div className={styles['header-banner__background']}></div>
      <div className={styles['header-banner__content']}>
        <div className={styles['header-banner__content--desktop']}>
          <p><strong>Black Friday</strong><span className={styles['hide-on-tablet']}>, 24-27 Nov</span></p>
          <p className={styles['header-banner__content-code']}><span className="checkout-code">10%OFF</span></p>
          <p>Use code <span className="checkout-code">10FRIDAY</span><span className={styles['hide-on-tablet']}> at checkout</span></p>
        </div>
        <div className={styles['header-banner__content--mobile']}>
          <p><strong>Black Friday,</strong> <span className="checkout-code">10%OFF</span></p>
        </div>
      </div>
      <div className={styles['header-banner__navigation']}>
        <Link href={'/'}>
          <a className={styles['header-banner__link']} title={'Opens the Shop page'}>Shop now</a>
        </Link>
        <Link href={'/'}>
          <a className={styles['header-banner__link--mobile']} title={'Opens the Shop page'}>
            <Image
              width={30}
              height={30}
              quality={100}
              src={'/arrow-right-icon.svg'}
              alt={'Arrow right icon'}
            />
          </a>
        </Link>
        <span className={styles['hide-on-tablet']}>
          <button className={styles['header-banner__close']} onClick={onHeaderBannerClose}>
            <Image
              width={24}
              height={24}
              quality={100}
              src={'/close-icon.svg'}
              alt={'Close icon'}
            />
          </button>
        </span>
      </div>
    </div>
  );
}

export default HeaderBanner;
