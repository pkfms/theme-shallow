import { X } from '@tamagui/lucide-icons';
import { Button, Dialog, Fieldset, H2, Input, Label, Theme, Unspaced, XStack, YStack } from 'tamagui';

export default function TabOneScreen() {
  return (
    <Theme name={'blue'}>
      <YStack flex={1} items="center" gap="$8" px="$10" pt="$5" bg="$background">
        <H2>Tamagui + Expo</H2>

        {/* <Form>
          <YStack>
            <Label>Name</Label>
            <Input></Input>
          </YStack>

          <Form.Trigger asChild>
            <Button>
              <Button.Text>Submit</Button.Text>
            </Button>
          </Form.Trigger>
        </Form> */}
        <DialogInstance />
      </YStack>
    </Theme>
  );
}

function DialogInstance({ disableAdapt }: { disableAdapt?: boolean }) {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button>
          <Button.Text>Show Dialog{disableAdapt ? ` (No Sheet)` : ''}</Button.Text>
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          bg="$shadow6"
          animateOnly={['transform', 'opacity']}
          animation={[
            'quicker',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.FocusScope focusOnIdle>
          <Dialog.Content
            bordered
            py="$4"
            px="$6"
            elevate
            r="$6"
            key="content"
            animateOnly={['transform', 'opacity']}
            animation={[
              'quicker',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: 20, opacity: 0 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            gap="$4"
          >
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>Make changes to your profile here. Click save when you're done.</Dialog.Description>

            <Fieldset gap="$4" horizontal>
              <Label width={64} htmlFor="name">
                Name
              </Label>
              <Input flex={1} id="name" defaultValue="Nate Wienert" />
            </Fieldset>

            <XStack a="flex-end" gap="$4">
              <Dialog.Close displayWhenAdapted asChild>
                <Button theme="accent" aria-label="Close">
                  Save changes
                </Button>
              </Dialog.Close>
            </XStack>

            <Unspaced>
              <Dialog.Close asChild>
                <Button position="absolute" right="$3" size="$2" circular icon={X} />
              </Dialog.Close>
            </Unspaced>
          </Dialog.Content>
        </Dialog.FocusScope>
      </Dialog.Portal>
    </Dialog>
  );
}
