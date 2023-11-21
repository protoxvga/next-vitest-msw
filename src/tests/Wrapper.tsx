import { FC, PropsWithChildren } from "react";

import { Providers } from "@/utils/providers";

export const wrapper: FC<PropsWithChildren> = ({ children }) => (
  <Providers>{children}</Providers>
);
