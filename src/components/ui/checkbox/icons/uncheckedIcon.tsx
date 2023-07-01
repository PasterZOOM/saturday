import { SVGProps, Ref, forwardRef, memo } from 'react'
const UncheckedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M19 5v14H5V5h14Zm0-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
    />
  </svg>
)
const ForwardRef = forwardRef(UncheckedIcon)
const Memo = memo(ForwardRef)

export { Memo as UncheckedIcon }
