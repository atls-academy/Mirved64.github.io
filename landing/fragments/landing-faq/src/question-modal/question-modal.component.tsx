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

import { QuestionModalProps } from './question-modal.interfaces'
import { useFaq }             from '../data'

export const QuestionModal: FC<QuestionModalProps> = ({ open, setOpen }) => {
  const [send, setSend] = useState<boolean>(false)
  const [name, setName] = useState<string>('')

  const handleNameChange = (userName: string) => setName(userName)

  const faq = useFaq()

  const title: string = faq?.data?.navigationBy?.title

  return (
    <Modal open={open} onClose={setOpen}>
      <Column width={375}>
        <Background backgroundImage='navyBlueGradient' borderRadius='regular' overflow='hidden'>
          <Background
            backgroundImage='banner'
            backgroundRepeat='no-repeat'
            backgroundPosition='-227px -168px'
            backgroundSize='tiny'
          >
            <Row>
              <Layout flexBasis={30} />

              <Column flexGrow='1'>
                <Layout flexBasis={40} />

                <Box>
                  <Condition match={!send}>
                    <Text color='text.white' fontSize='regular' lineHeight='large'>
                      {title}
                    </Text>
                  </Condition>

                  <Condition match={send}>
                    <Text color='text.white' fontSize='regular' lineHeight='large'>
                      {name}
                      <FormattedMessage id='form.thanks' />
                    </Text>
                  </Condition>
                </Box>

                <Layout flexBasis={40} />
              </Column>

              <Layout flexBasis={30} />
            </Row>
          </Background>

          <Form
            name={name}
            send={send}
            setSend={setSend}
            onClose={setOpen}
            onChange={handleNameChange}
          />
        </Background>
      </Column>
    </Modal>
  )
}
