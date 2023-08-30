import React                  from 'react'
import { FC }                 from 'react'
import { FormattedMessage }   from 'react-intl'
import { useState }           from 'react'

import { Background }         from '@ui/background'
import { Condition }          from '@ui/condition'
import { Form }               from '@ui/form'
import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { Modal }              from '@ui/modal'
import { Text }               from '@ui/text'

import { QuestionModalProps } from './question-modal.intarfaces'

export const QuestionModal: FC<QuestionModalProps> = ({ open, setOpen }) => {
  const [message, setMessage] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [send, setSend] = useState<boolean>(false)
  const [display, setDisplay] = useState<boolean>(false)

  return (
    <Modal open={open} onClose={setOpen}>
      <Column width={375}>
        <Background backgroundColor='navyBlueGradient' borderRadius='regular' overflow='hidden'>
          <Background
            backgroundColor='banner'
            backgroundRepeat='no-repeat'
            backgroundPosition='-227px -168px'
            backgroundSize='684px 428px'
          >
            <Row>
              <Layout flexBasis={30} />

              <Column flexGrow='1'>
                <Layout flexBasis={40} />

                <Box>
                  <Condition match={!send}>
                    <Text color='text.white' fontSize='regular' lineHeight='large'>
                      <FormattedMessage id='modal.title' />
                    </Text>
                  </Condition>

                  <Condition match={send}>
                    <Text color='text.white' fontSize='regular' lineHeight='large'>
                      {name}, спасибо!
                    </Text>
                  </Condition>
                </Box>

                <Layout flexBasis={40} />
              </Column>

              <Layout flexBasis={30} />
            </Row>
          </Background>

          <Form
            message={message}
            setMessage={setMessage}
            name={name}
            setName={setName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            send={send}
            setSend={() => setSend(true)}
            setDisplay={() => setDisplay(true)}
            display={display}
            onClose={setOpen}
          />
        </Background>
      </Column>
    </Modal>
  )
}
