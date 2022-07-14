import Link from 'next/link'
import {LoginOutlined} from '@ant-design/icons';
import {Result, Button} from 'antd';



export default function FourOhFour() {
    return (
        <div>
            <Result
                status="403" title="Sorry, you are not authorized to access this page."
                extra={
                    <Button type="primary">
                        <Link href={"/"} className="myBtn default br">Sign In</Link>
                    </Button>
                }
            />
        </div>
    )
}
