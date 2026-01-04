import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/components/common/Layout/Box';
import { FunctionList } from '@/features/home/function-list';
import { InforAccount } from '@/features/home/infor-account';
import { useGetTimetableList } from '@/hooks/useTimetable';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const { data } = useGetTimetableList({
    page: 1,
    limit: 21,
  });

  return (
    <LinearGradient
      colors={['rgba(50, 99, 248, 1)', 'rgba(50, 99, 248, 0)']}
      style={styles.background}
    >
      <Image
        source={require('@/assets/images/background-home-image.png')}
        style={styles.logoAbsolute}
        width={screenWidth}
        height={screenHeight / 2}
      />
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView
          style={styles.titleContainer}
          showsVerticalScrollIndicator={false}
        >
          <InforAccount />
          <FunctionList />
          {/* <ScheduleDetail item={formatByWeek(data || [])[0]} isHome />
          <HonorOfWeek /> */}
          <Image
            source={require('@/assets/images/footer-home-image.png')}
            resizeMode="contain"
            style={{
              width: screenWidth,
              height: (screenWidth / 375) * 280,
              // marginTop: 16,
              alignSelf: 'center',
            }}
          />
          <Box h={50} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  logo: {
    width: 61,
    height: 68,
  },
  logoAbsolute: {
    position: 'absolute',
    top: 0,
  },
});

type WeekGroup = {
  weekIndex: number;
  startOfWeek: string; // YYYY-MM-DD (Monday)
  days: {
    date: string; // YYYY-MM-DD
    items: any[];
  }[];
};

type Item = {
  date: string; // YYYY-MM-DD
  [key: string]: any;
};

function formatByWeek(items: Item[]): WeekGroup[] {
  const weekMap = new Map<string, WeekGroup>();

  items.forEach(item => {
    const date = new Date(item.date);
    const day = date.getDay(); // 0 (Sun) - 6 (Sat)

    // Calculate Monday of the week
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(date);
    monday.setDate(date.getDate() + diff);

    const mondayKey = monday.toISOString().split('T')[0];

    // Create week if not exists
    if (!weekMap.has(mondayKey)) {
      const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        return {
          date: d.toISOString().split('T')[0],
          items: [],
        };
      });

      weekMap.set(mondayKey, {
        weekIndex: weekMap.size + 1,
        startOfWeek: mondayKey,
        days,
      });
    }

    // Push item into correct day
    const week = weekMap.get(mondayKey)!;
    const dayEntry = week.days.find(d => d.date === item.date);
    if (dayEntry) {
      dayEntry.items.push(item);
    }
  });

  return Array.from(weekMap.values());
}
