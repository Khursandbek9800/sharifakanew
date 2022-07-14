import {Col, Input, Row} from "antd";
import styles from "../../../styles/home/homeComponents/form.module.scss";
import { Select } from 'antd';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const { TextArea } = Input;

const { Option } = Select;

function Form() {

    const registerUser = event => {
        event.preventDefault() // don't redirect the page
        // where we'll add our form logic
    }
    return (
        <form onSubmit={registerUser}>
            <div className={styles.flex}>
                <div className={styles.title}>
                    Bizga habar jo'nating
                </div>
                <div className={styles.line}/>
            </div>
            <Row gutter={[20,20]} className={styles.mar}>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Input placeholder="Ism familya"/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Input placeholder="Email"/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Input placeholder="Tel"/>
                </Col>
            </Row>
            <div className={styles.mar30}>
                <TextArea rows={5} placeholder="Habar" className={styles.res}/>
            </div>
            <div className={styles.ok}>
                <div className={styles.contact}>
                   Jo'natish  <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon}/>
                </div>
            </div>
        </form>
    )
}
export default Form
