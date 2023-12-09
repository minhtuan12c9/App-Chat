import * as React from 'react';
import { View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { COLORS } from '../../contains';
import styles from './styles'

const Progress = ({ loading, visible }) => (
    <View style={styles.container}>
        <ProgressBar visible={visible} style={styles.progress} progress={loading} color={COLORS.white} />
    </View>
);

export default Progress;