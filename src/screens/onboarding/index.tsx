import React, { useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import ViewPager, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import colors from 'src/colors';
import Icon from 'src/components/icon';
import useAppNavigation from 'src/hooks/useAppNavigation';
import { onboardingPages } from './constants';
import OnboardingFooter from './onboardingFooter';
import OnboardingPage from './onboardingPage';
import styles from './styles';

const Onboarding = () => {
   const pagerRef = useRef<ViewPager>(null);

   const [page, setPage] = useState(0);

   const { navigate } = useAppNavigation();

   const handlePageScroll = (e: PagerViewOnPageSelectedEvent) => {
      const { position } = e.nativeEvent;
      setPage(position);
   };

   const handleNavigate = () => navigate('mainQuestionnaire');

   const changePage = (page: number) => {
      if (page === onboardingPages.length) {
         handleNavigate();
      } else {
         pagerRef.current?.setPage(page);
      }
   };

   return (
      <View style={styles.container}>
         <ViewPager onPageSelected={handlePageScroll} ref={pagerRef} style={styles.pager}>
            {onboardingPages.map((pageInfo, index) => (
               <View key={index}>
                  <OnboardingPage {...pageInfo} />
               </View>
            ))}
         </ViewPager>
         <OnboardingFooter length={onboardingPages.length} page={page} setPage={changePage} />
         <Pressable onPress={handleNavigate} style={styles.closeButton}>
            <Icon name='cross' size={14} fill={colors.darkgray} />
         </Pressable>
      </View>
   );
};

export default Onboarding;
