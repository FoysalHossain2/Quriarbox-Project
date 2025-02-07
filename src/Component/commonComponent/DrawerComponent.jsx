import React from 'react'
import { Button, Drawer, DrawerAction, DrawerContent, Skeleton, SkeletonLine } from 'keep-react'

const DrawerComponent = () => {
  return (
    <Drawer>
    <DrawerAction asChild>
      <Button className='text-red-400'>Open Drawerg </Button>
    </DrawerAction>
    <DrawerContent position="left">
      <div className="bg-black mx-auto max-w-md space-y-3 px-6 py-8 lg:px-0">
        <Skeleton className="space-y-2.5">
          <SkeletonLine className="h-[200px]" />
          <SkeletonLine className="h-4" />
          <SkeletonLine className="h-4" />
          <SkeletonLine className="h-4" />
          <SkeletonLine className="h-4" />
          <SkeletonLine className="h-10 w-1/3" />
        </Skeleton>
      </div>
    </DrawerContent>
  </Drawer>
  )
}

export default DrawerComponent