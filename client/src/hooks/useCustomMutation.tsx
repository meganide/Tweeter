import { useMutation, useQueryClient } from 'react-query';

import { AxiosResponse } from 'axios';

function useCustomMutation(
  requestFunction: (parameter: any) => Promise<AxiosResponse<any, any>>,
  invalidateQueries: string
): any {
  const queryClient = useQueryClient();

  return useMutation(requestFunction, {
    onSuccess: () => {
      queryClient.invalidateQueries(invalidateQueries);
    },
  });
}

export { useCustomMutation };
