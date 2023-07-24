import React        from 'react'

import { Backdrop } from './backdrop'

export const CardContainer = ({ children, ...props }) => <Backdrop {...props}>{children}</Backdrop>
