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
            <Row gutter={30} className={styles.mar}>
                <Col>
                    <Input placeholder="Name"/>
                </Col>
                <Col className={styles.bot}>
                    <Input placeholder="Phone"/>
                </Col>
            </Row>
            <div className={styles.mar30}>

            </div>
            <div className={styles.mar30}>
                <TextArea rows={5} placeholder="Message" className={styles.res}/>
            </div>
                <div className={styles.contact}>
                    GET A QUOTE  <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon}/>
                </div>
        </form>
    )
}
export default Form