import React from 'react';

import {FaGoogle, FaGithub} from 'react-icons/fa'
import { DottedSeparator } from '@/components/dottedSeparator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {Button} from "@/components/ui/button";

const LoginCard = () => {
  {/*••••••••*/}
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="email"
            value={''}
            onChange={() => {}}
            placeholder="Email"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={''}
            onChange={() => {}}
            placeholder="Password"

            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} type="submit" size='lg' className='w-full'>
            Login
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="flex p-7 flex-col gap-y-4">
        <Button disabled={false} variant="secondary" size='lg' className="w-full">
          <FaGoogle className='size-5 mr-2' />
          Login with Google
        </Button>
        <Button disabled={false} variant="secondary" size='lg' className="w-full">
          <FaGithub className='size-5 mr-2' />
          Login with GitHub
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
