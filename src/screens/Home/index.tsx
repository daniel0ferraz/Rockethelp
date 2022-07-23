import { useState } from 'react';
import {
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
  FlatList,
  Center,
} from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';

import Logo from '../../assets/logo_secondary.svg';
import Filter from '../../components/Filter';
import Order from '../../components/Order';
import { OrderProps } from '../../components/Order';
import Button from '../../components/Button';

export default function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>(
    'open'
  );
  const [orders, setOrders] = useState<OrderProps[]>([
    // {
    //   id: '1',
    //   patrimony: '123456789',
    //   when: '18/07/2022',
    //   status: 'open',
    // },
    // {
    //   id: '2',
    //   patrimony: '123456710',
    //   when: '22/07/2022',
    //   status: 'closed',
    // },
    // {
    //   id: '3',
    //   patrimony: '123456710',
    //   when: '22/07/2022',
    //   status: 'closed',
    // },
    // {
    //   id: '4',
    //   patrimony: '123456710',
    //   when: '22/07/2022',
    //   status: 'open',
    // },
    // {
    //   id: '5',
    //   patrimony: '123456710',
    //   when: '22/07/2022',
    //   status: 'open',
    // },
    // {
    //   id: '6',
    //   patrimony: '123456710',
    //   when: '22/07/2022',
    //   status: 'open',
    // },
  ]);

  const { colors } = useTheme();
  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.700"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="em andamento"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type="closed"
            title="finalizados"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Order data={item} onPress={() => console.log('alguma coisa')} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <>
              <Center>
                <ChatTeardropText color={colors.gray[300]} size={40} />
                <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                  Você ainda não possui {'\n'}
                  solicitações{' '}
                  {statusSelected === 'open' ? 'em andamento' : 'finalizados'}
                </Text>
              </Center>
            </>
          )}
        />

        <Button title="Nova solicitação" />
      </VStack>
    </VStack>
  );
}
