import { View, Modal, ModalProps, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import { styles } from './styles';
import { THEME } from '../../theme';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard';

interface Props extends ModalProps {
  discord : string;
  onClose : () => void;
}

export function DuoMatch( { discord, ...rest } : Props) {
  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscordToClipbord() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);
    Alert.alert("Discord Cópiado!", "Usuário copiado para você colar no seu Discord");
    setIsCopping(false);
  }

  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="fade"
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
            <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
              <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500}>

              </MaterialIcons>
            </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            title="Let's play!"
            subtitle="Agora é só comecar a jogar!"
            styles={{alignItems : 'center', marginTop : 24 }}
          />
          <Text style={styles.label}>
            Adicione no Discord
          </Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipbord}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator color={ THEME.COLORS.PRIMARY }/> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}