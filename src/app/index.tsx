import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import logoImg from '../../assets/images/fairpay.png';

export default function LoginScreen() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Onda Superior */}
      <View style={styles.waveTopContainer}>
        <Svg width="100%" height="100%" viewBox="0 0 375 120" preserveAspectRatio="none">
          <Path
            d="M0,40 Q90,110 180,50 T360,60 L375,60"
            fill="none"
            stroke="#65D5B0"
            strokeWidth="3"
          />
        </Svg>
      </View>

      <View style={styles.content}>
        {/* Logo FairPay */}
        <Image
          source={logoImg}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Campo de Email */}
        <TextInput
          style={styles.input}
          placeholder="insira o seu email"
          placeholderTextColor="#BDBDBD"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Campo de Senha */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="insira a sua senha"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={!senhaVisivel}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          >
            <Text style={styles.eye}>{senhaVisivel ? '◉' : '◌'}</Text>
          </TouchableOpacity>
        </View>

        {/* Links de Navegação usando router.push para evitar erro 404 no GitHub Pages */}
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => router.push('/register-step1')}>
            <Text style={styles.link}>Criar uma conta</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/forgot-password')}>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de Login */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>
      </View>

      {/* Onda Inferior */}
      <View style={styles.waveBottomContainer}>
        <Svg width="100%" height="100%" viewBox="0 0 375 120" preserveAspectRatio="none">
          <Path
            d="M0,80 Q100,10 200,80 T375,50"
            fill="none"
            stroke="#65D5B0"
            strokeWidth="3"
          />
          <Path
            d="M0,120 L0,80 Q100,10 200,80 T375,50 L375,120 Z"
            fill="#001DFF"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 25,
    alignItems: 'center',
    zIndex: 2,
  },
  logo: {
    width: 240,
    height: 90,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#9A8CFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#333333',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#9A8CFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#333333',
  },
  eyeButton: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eye: {
    fontSize: 18,
    color: '#AAAAAA',
  },
  linksContainer: {
    width: '100%', // Garante o alinhamento separado nas pontas
    flexDirection: 'row',
    justify: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  link: {
    fontSize: 12,
    color: '#333333',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#001DFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  waveTopContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 1,
  },
  waveBottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 1,
  },
});