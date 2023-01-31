import type { VoidFunctionComponent } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { DeleteConsumerGroup } from "ui";
import { useDeleteConsumerGroupMutation } from "consoledot-api";
import type { DataPlaneConsumerGroupNavigationsProps } from "../routesConsts";
import { useConsumerGroupGate } from "../useConsumerGroupGate";

export const ConsumerGroupDeleteRoute: VoidFunctionComponent<
  DataPlaneConsumerGroupNavigationsProps
> = ({ instanceConsumerGroupsHref }) => {
  const history = useHistory();

  const { instance, consumerGroup } = useConsumerGroupGate();

  const { mutateAsync } = useDeleteConsumerGroupMutation();

  const onCancel = useCallback(() => {
    history.push(instanceConsumerGroupsHref(instance.id));
  }, [history, instance.id, instanceConsumerGroupsHref]);

  const onDelete = useCallback(() => {
    void mutateAsync({
      instanceId: instance.id,
      adminUrl: instance.adminUrl!,
      consumerGroupId: consumerGroup.groupId,
      onError: () => {
        // TODO: alert
      },
      onSuccess: () => {
        history.replace(instanceConsumerGroupsHref(instance.id));
      },
    });
  }, [
    mutateAsync,
    history,
    instance?.id,
    instanceConsumerGroupsHref,
    consumerGroup.groupId,
  ]);

  return (
    <DeleteConsumerGroup
      isModalOpen={true}
      onClose={onCancel}
      onDeleteConsumer={onDelete}
      state={consumerGroup.state}
      consumerName={consumerGroup.groupId}
      appendTo={() =>
        (document.getElementById("chrome-app-render-root") as HTMLElement) ||
        document.body
      }
    />
  );
};