import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Svg width={width} height={180} viewBox={`0 0 ${width} 180`} style={styles.waveTop}>
        <Path
          d={`M 0 95 C 30 125, 65 105, 100 88 C 145 67, 165 30, 205 47 C 230 57, 250 80, ${width} 98`}
          fill="none"
          stroke="#65D5B0"
          strokeWidth="1"
        />
      </Svg>

      <View style={styles.content}>
        <Image
          source={require('../../assets/images/fairpay.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <TextInput
          style={styles.input}
          placeholder="insira o seu email"
          placeholderTextColor="#BDBDBD"
          keyboardType="email-address"
          autoCapitalize="none"
        />

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

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => router.push('/register-step1')}>
            <Text style={styles.link}>Criar uma conta</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/forgot-password')}>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>
      </View>

      <Svg width={width} height={160} viewBox={`0 0 ${width} 160`} style={styles.waveBottom}>
        <Path
          d={`M 0 20 C 35 -5, 65 20, 105 42 C 150 67, 175 70, 210 42 C 235 22, 250 10, ${width} - 5`}
          fill="none"
          stroke="#65D5B0"
          strokeWidth="1"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { flex: 1, alignItems: 'center', paddingHorizontal: 33, paddingTop: height * 0.22 },
  logo: { width: 280, height: 180, marginBottom: 25 },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#9A8CFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 13,
    color: '#333333',
    marginBottom: 16,
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
  },
  passwordInput: { flex: 1, height: '100%', paddingHorizontal: 15, fontSize: 13, color: '#333333' },
  eyeButton: { width: 40, height: '100%', justifyContent: 'center', alignItems: 'center' },
  eye: { fontSize: 18, color: '#AAAAAA' },
  linksContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28 },
  link: { fontSize: 11, color: '#555555', textDecorationLine: 'underline' },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#001DFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
  waveTop: { position: 'absolute', top: 0, left: 0 },
  waveBottom: { position: 'absolute', bottom: 0, left: 0 },
});