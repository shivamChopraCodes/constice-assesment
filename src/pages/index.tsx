import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';

import barIcon from '~/images/bars.png';
import checkIcon from '~/images/check-circle.png';
import downlaodIcon from '~/images/download.png';
import gridIcon from '~/images/grid.png';
import heroImage from '~/images/hero-image.png';
import lightningIcon from '~/images/lightning.png';
import measureDesktop from '~/images/Measure-analyze-desktop.png';
import measureMobile from '~/images/Measure-analyze-mobile.png';
import pieIcon from '~/images/pie.png';
import settingsIcon from '~/images/settings.png';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const features = [
  {
    title: 'Lower Cost of Ownership',
    description:
      'No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.',
    icon: downlaodIcon,
  },
  {
    title: 'Higher Agent Occupancy',
    description:
      'Real-time and historical agent scorecards to improve agent occupancy.',
    icon: gridIcon,
  },
  {
    title: 'First Contact Resolution',
    description:
      'MImInize rebeat callers. handle more customers, convert more business.',
    icon: lightningIcon,
  },
];

const analyseFeatures = [
  {
    title: 'No Avava AES Server Needed',
    description:
      'Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed.',
  },
  {
    title: 'Scheduled Reports By E-Mail',
    description:
      'Daily insights by email for team agents and the queues based on goals and thresholds',
  },
  {
    title: 'Avava ECH Cradle to Grave Reports',
    description:
      'Create cradle to grave reports and visual customer journey for each call using Avava CMS External Call Historv data.',
  },
];

const features2 = [
  {
    title: 'Download Data Sheet',
    description: 'Click here to download data sheet.',
    icon: settingsIcon,
  },
  {
    title: 'Access Sample Reports',
    description: 'View sample reports and scorecards.',
    icon: pieIcon,
  },
  {
    title: 'High-Level Design Guide',
    description: 'Solution topology, integrations and project plan',
    icon: barIcon,
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}

      <main className='flex flex-col items-center gap-y-6 lg:gap-y-12'>
        <section className='lg:t-40 w-full max-w-7xl bg-white pt-14'>
          <div className='flex w-full flex-col justify-between lg:flex-row'>
            <div className='flex  w-full flex-col items-center gap-y-2 px-5 lg:w-1/3 lg:px-0 '>
              <h1 className='hero-text w-2/3 text-center text-2xl font-bold lg:w-full lg:text-left lg:text-7xl'>
                Avaya Call Reporting Reinvented
              </h1>
              <Image
                src={heroImage}
                alt='hero-image'
                className='h-auto w-[65%] lg:hidden'
              />
              <p className='mt-2 text-sm leading-relaxed text-neutral-700 lg:text-lg'>
                Step into the future of call center analytics with Comstice
                Avaya Call Reporting solution. Say goodbye to the need for an
                Avaya AES server and extra licenses for every agent, and say
                hello to a world of insightful analytics, cradle-to-grave
                reports, and automated agent and team reports by email.
              </p>
              <Button
                className='mt-4 self-end lg:self-start'
                variant='primary'
                size='base'
                onClick={() => null}
              >
                {' '}
                Request Demo {`-->`}{' '}
              </Button>
            </div>

            <Image
              src={heroImage}
              alt='hero-image'
              className='hidden h-auto w-[40%] lg:block'
            />
          </div>
        </section>
        <section className='features  lg:bg-light flex w-full items-center justify-center bg-white px-6 py-7 lg:py-20'>
          <div className='flex w-full max-w-7xl flex-col items-center justify-between gap-y-5 lg:flex-row'>
            {features.map((feature) => (
              <div
                key={feature.title}
                className='flex items-start gap-x-2 lg:gap-x-5'
              >
                <Image
                  src={feature.icon}
                  alt='icon'
                  className='h-7 w-7 lg:h-6 lg:w-6'
                />
                <div className='flex flex-grow flex-col gap-y-1 lg:w-1/3 lg:gap-y-3 lg:px-0 '>
                  <h2 className='text-sm font-semibold  text-neutral-700 lg:text-2xl'>
                    {feature.title}
                  </h2>
                  <p className='text-sm text-neutral-600 lg:text-base'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='bg-light flex w-full items-center justify-center px-6 py-7 lg:bg-white lg:py-20'>
          <div className='flex w-full max-w-7xl items-center justify-between'>
            <Image
              className='hidden h-auto w-1/2 lg:block'
              src={measureDesktop}
              alt='measure analyze'
            />
            <div className='flex flex-col gap-y-2'>
              <h2 className='hero-text text-center text-2xl font-bold lg:w-full lg:text-left lg:text-7xl'>
                Measure, Analyze improve
              </h2>
              <p className='my-2 text-sm leading-relaxed text-neutral-700 lg:text-lg'>
                Visualise your historical performance to understand customer
                behavior, customer patience and the demand for customer service
                using out of the box analvtics features and performance
                indicators.
              </p>
              <Image
                src={measureMobile}
                className='w-full lg:hidden'
                alt='measure analyze'
              />
              <div className='mt-3 flex flex-col gap-y-5 lg:mt-0 lg:w-2/3'>
                {analyseFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className='flex items-start gap-x-2 lg:gap-x-5'
                  >
                    <Image
                      src={checkIcon}
                      alt='icon'
                      className='h-9 w-9 lg:h-6 lg:w-6'
                    />
                    <div className='flex flex-grow flex-col gap-y-1 lg:gap-y-3 lg:px-0 '>
                      <h2 className='text-sm font-semibold  text-neutral-700 lg:text-2xl'>
                        {feature.title}
                      </h2>
                      <p className='text-sm text-neutral-600 lg:text-base'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className='features  lg:bg-light flex w-full items-center justify-center bg-white px-6 py-7 lg:py-20'>
          <div className='flex w-full max-w-7xl flex-col items-start justify-between gap-y-5 lg:flex-row'>
            {features2.map((feature) => (
              <div
                key={feature.title}
                className='flex  items-start gap-x-2 lg:flex-col lg:gap-x-5'
              >
                <Image
                  src={feature.icon}
                  alt='icon'
                  className='h-7 w-7 lg:h-6 lg:w-6'
                />
                <div className='flex flex-grow flex-col gap-y-1 lg:w-1/3 lg:gap-y-3 lg:px-0 '>
                  <h2 className='text-sm font-semibold  text-neutral-700 lg:text-2xl'>
                    {feature.title}
                  </h2>
                  <p className='text-sm text-neutral-600 lg:text-base'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
