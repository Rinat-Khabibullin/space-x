import { Text, Card, Image, Button } from '@mantine/core'
import type { Launch } from '../../types/Launch'

interface LaunchCardProps {
  launch: Launch;
  onOpen: (launch: Launch) => void
} 
export function LaunchCard({ launch, onOpen }: LaunchCardProps) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Card.Section>
        <Image my='xl' py='sm'
        src={launch.links.mission_patch_small}
        alt={launch.mission_name}
        h={120}
        fit='contain'
        />
      </Card.Section>

      <Text ta='center' truncate="end" fw={600} my=''>{launch.mission_name}</Text>
      <Text ta='center' c='dimmed'>{launch.rocket.rocket_name}</Text>
      <Button  mx='xl' mt='xl' onClick={() => onOpen(launch)}>
        See more
      </Button>
    </Card>
  )
}