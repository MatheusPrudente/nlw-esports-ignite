import { SafeAreaView } from 'react-native';
import { Background } from "./src/components/Background";
import { useRoute} from '@react-navigation/native';
import { View, TouchableOpacity } from "react-native";

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import logoImg from '../../assets/games/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { useNavigation } from "@react-navigation/native";
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { useEffect, useState } from "react";
import { DuoMatch } from '../../components/DuoMatch';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  function handleGoBack (){
    navigation.navigate('home');
  }

  async function getDiscordUser( adsId : string) {
    await fetch(`http://192.168.0.111:3333/ads/${adsId}/discord`)
    .then((response) => response.json())
    .then((data) => {
      setDiscordDuoSelected(data);
    });
  }

  useEffect(() => {
    fetch(`http://192.168.0.111:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => {
        setDuos(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header} >
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
              source={logoImg}
              style={styles.logo}
            />
            <View style={styles.right}/>
        </View>

        <Image
          source={{ uri : game.bannerUrl }}
          styles={styles.cover}
          resizeMode="cover"
        />
        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar"
        />
        <FlatList
          data={duos}
          keyExtractor = {(item) => item.id}
          renderItem = {({ item }) =>
            <DuoCard
              data={item}
              onConnect={() => { getDiscordUser(item.id) }}
            />
          />
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          styles={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent ]}
          ListEmptyComponent={() => (
            <Text styel={styles.emptyListText}>
              Não há anuncios publicados ainda
            </Text>
          )}
        />
        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        ></DuoMatch>
      </SafeAreaView>
    </Background>
  );
}