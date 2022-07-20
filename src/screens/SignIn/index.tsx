import { Heading, Icon, VStack, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import Logo from '../../assets/logo_primary.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function SignIn() {
  const { colors } = useTheme();
  return (
    <>
      <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
        <Logo />
        <Heading color="gray.100" fontSize="xl" mt={20} mb="6">
          Acesse sua conta
        </Heading>

        <Input
          placeholder="E-mail"
          mb="4"
          InputLeftElement={
            <Icon ml={4} as={<Envelope color={colors.gray[300]} />} />
          }
        />
        <Input
          mb={8}
          placeholder="Senha"
          InputLeftElement={
            <Icon ml={4} as={<Key color={colors.gray[300]} />} />
          }
          secureTextEntry
        />

        <Button title="Entrar" w="full" />
      </VStack>
    </>
  );
}
