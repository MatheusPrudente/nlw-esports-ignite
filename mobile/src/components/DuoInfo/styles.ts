import { THEME } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width : '100%',
    marginBotton : 16
  },
  label : {
    color : THEME.COLORS.CAPTION_300,
    fontSize : THEME.FONT_SIZE.SM,
    fontFamily : THEME.FONT_FAMILY.REGULAR,
    marginBotton : 4
  },
  value : {
    fontSize : THEME.FONT_SIZE.SM,
    fontFamily : THEME.FONT_FAMILY.BOLD,
    marginBotton : 4
  },
});