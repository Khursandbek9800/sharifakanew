import Link from 'next/link'
import {Result, Button} from 'antd';
import {LoginOutlined} from '@ant-design/icons';

export default function FourOhFour() {
    return (
        <div>
            <Result
                status="404" title="Sorry, you are not authorized to access this page."
                extra={
                    <Button type="primary">
                        <Link href={"/"} className="myBtn default br">Go Home</Link>
                    </Button>
                }
            />
        </div>
    )

}