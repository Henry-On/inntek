import Link from 'next/link'
import NotifyForm from './NotifyForm'
import styles from './page.module.css'
import { ButtonLink } from '@/components/buttons'
import FontAwesomeIcon from '@/components/FontAwesomeIcon'

export const metadata = {
  title: 'InnTek - Referral Program',
  description: 'Join the InnTek referral program waitlist and get notified when it launches.',
}

const ReferralProgram = () => {
  return (
    <main className={styles.referralPage}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent} data-gsap-animate="stagger-fade-up" data-gsap-stagger="0.2" >
            <span className={styles.kicker}>Referral Program</span>
            <h1>Earn commissions by connecting businesses to trusted technology solutions.</h1>
            <p>
              Our referral program is coming soon for registered accounts who want to
              recommend InnTek services, request solutions for clients, and earn
              commission when those referrals become successful projects.
            </p>
            <ButtonLink
              text="Back to Home"
              className={styles.homeButton}
              href="/"
              icon={<FontAwesomeIcon className='fa fa-home' />}
              iconPosition='left'
            />
          </div>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className={styles.detailsGrid}>
          <div className={styles.writeup} data-gsap-animate="stagger-fade-up" data-gsap-stagger="0.2">
            <span className={styles.sectionLabel}>Coming soon</span>
            <h2>A simple way to partner with InnTek</h2>
            <p>
              We are building a referral system that will allow registered users to
              submit service requests, track referred opportunities, and receive
              commissions after qualified projects are confirmed and completed.
            </p>
            <p>
              The full experience will include account registration, referral request
              tracking, commission status updates, and clear payout information. For
              now, this page is here so interested partners, clients, and business
              connectors can know the program is on the way.
            </p>
          </div>

          <div className={styles.notifyCard} data-gsap-animate="stagger-fade-up" data-gsap-stagger="0.2">
            <span className={styles.formLabel}>Get launch updates</span>
            <h2>Be first to know</h2>
            <p>
              Leave your email and we will notify you when the referral program kicks
              off.
            </p>
            <NotifyForm styles={styles} />
            <p className={styles.formNote}>
              No account is needed yet. This is only for referral program launch
              notifications.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ReferralProgram
