import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

interface Prosps extends ViewProps {
  title: string;
  subtitle: string;
}

export function Heading({ title, subtitle, ...rest }: Prosps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
