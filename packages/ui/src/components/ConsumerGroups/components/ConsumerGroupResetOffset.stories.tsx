import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConsumerGroupResetOffset } from "./ConsumerGroupResetOffset";
import type { ConsumerRow } from "./ConsumerGroupResetOffset";

const consumer: ConsumerRow[] = [
  {
    groupId: "1",
    topic: "test-topic",
    partition: 0,
    offset: 4,
    logEndOffset: 1,
    lag: 0,
    memberId: "123456789",
    selected: true,
  },
  {
    groupId: "2",
    topic: "test",
    partition: 1,
    offset: 3,
    logEndOffset: 1,
    lag: 0,
    selected: true,
  },
  {
    groupId: "3",
    topic: "test",
    partition: 1,
    offset: 3,
    logEndOffset: 1,
    lag: 0,
    selected: true,
  },
  {
    groupId: "4",
    topic: "test2",
    partition: 1,
    offset: 3,
    logEndOffset: 1,
    lag: 0,
    selected: false,
  },
  {
    groupId: "4",
    topic: "test1",
    partition: 1,
    offset: 3,
    logEndOffset: 1,
    lag: 0,
    selected: false,
  },
];

const getTopics = () => {
  const topics = consumer.map((consumer) => consumer.topic);

  const distinctTopics = [...new Set(topics)];
  return distinctTopics;
};

export default {
  component: ConsumerGroupResetOffset,
  args: {
    disableFocusTrap: true,
    isDisconnected: true,
    groupId: "console",
    topics: getTopics(),
    consumers: consumer,
  },
} as ComponentMeta<typeof ConsumerGroupResetOffset>;

const Template: ComponentStory<typeof ConsumerGroupResetOffset> = (
  args,
  { id }
) => (
  <ConsumerGroupResetOffset
    {...args}
    appendTo={() =>
      document.getElementById(`story--${id}`) ||
      document.getElementById("root") ||
      document.body
    }
    disableFocusTrap={true}
  />
);

export const NoTopicSelected = Template.bind({});
NoTopicSelected.args = {
  isModalOpen: true,
};

export const ResetOffsetErrorMessage = Template.bind({});
ResetOffsetErrorMessage.args = {
  state: "Stable",
  isModalOpen: true,
};
