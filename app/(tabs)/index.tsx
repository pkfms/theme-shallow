import { Button, H2, ThemeableStack, YStack } from 'tamagui';

export default function TabOneScreen() {
  return (
    <YStack flex={1} items="center" gap="$8" px="$10" pt="$5" bg="$background">
      <H2>Tamagui + Expo</H2>

      <ThemeableStack backgrounded padded radiused theme={'blue'}>
        <Button>
          <Button.Text>This button should inherit blue theme</Button.Text>
        </Button>
      </ThemeableStack>

      <ThemeableStack backgrounded padded radiused theme={'blue'} themeShallow>
        <Button>
          <Button.Text>This button should not inherit blue theme</Button.Text>
        </Button>
      </ThemeableStack>
    </YStack>
  );
}
