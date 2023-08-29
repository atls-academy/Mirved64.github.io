import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { CheckIcon }        from '@ui/icons'
import { ArrowRightIcon }   from '@ui/icons'
import { Input }            from '@ui/input'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

export const Form = () => {
  const [message, setMessage] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [send, setSend] = useState<boolean>(false)
  const [display, setDisplay] = useState<boolean>(false)
  const intl = useIntl()

  return (
    <Box>
      <Condition match={!send}>
        <Layout flexBasis={20} />

        <Column>
          <Layout flexBasis={32} />

          <Box>
            <Input
              textarea
              value={message}
              onChange={setMessage}
              variant='common'
              size='bigSizeRegularRadii'
              placeholder={intl.formatMessage({ id: 'form.textare.placeholder' })}
              onClick={() => setDisplay(true)}
              filled={!!message}
            />
          </Box>

          <Condition match={display}>
            <Layout flexBasis={12} />

            <Input
              value={name}
              onChange={setName}
              variant='common'
              size='normalSizeNormallRadii'
              placeholder={intl.formatMessage({ id: 'form.name.placeholder' })}
              filled={!!name}
            />

            <Layout flexBasis={12} />

            <Input
              value={phoneNumber}
              onChange={setPhoneNumber}
              variant='common'
              size='normalSizeNormallRadii'
              placeholder={intl.formatMessage({ id: 'form.phone-number.placeholder' })}
              filled={!!phoneNumber}
              maxLength={500}
            />
          </Condition>

          <Layout flexBasis={24} />

          <Box width={335} flexShrink='0'>
            <Button
              variant='primaryBackgroundWhiteText'
              size='hugeSizeRegularRadii'
              icon={<ArrowRightIcon width={16} height={16} />}
              widthIcon={48}
              heightIcon={48}
              backgroundIcon='background.white'
              radiiIcon='normal'
              onClick={() => setSend(true)}
              disabled={!name || !phoneNumber || !message}
            >
              <Text color='text.white' fontSize='small' lineHeight='normal'>
                <FormattedMessage id='form.button.send' />
              </Text>
            </Button>
          </Box>

          <Condition match={!!message && !!name && !!phoneNumber}>
            <Layout flexBasis={24} />

            <Box display='inline'>
              <Text display='inline' color='primaryTransparent' fontSize='tiny' lineHeight='huge'>
                <FormattedMessage id='form.agreement.you-agree' />
              </Text>

              <Space />

              <Text
                style={{ textDecoration: 'underline' }}
                display='inline'
                color='primaryTransparent'
                fontSize='tiny'
                lineHeight='huge'
              >
                <FormattedMessage id='form.agreement.agreement' />
              </Text>
            </Box>
          </Condition>

          <Layout flexBasis={32} />
        </Column>

        <Layout flexBasis={20} />
      </Condition>

      <Condition match={send}>
        <Row>
          <Layout flexBasis={20} />

          <Column alignItems='center'>
            <Layout flexBasis={32} />

            <Box
              width={16}
              height={16}
              justifyContent='center'
              alignItems='center'
              backgroundColor='background.navyBlue'
              borderRadius='normal'
            >
              <CheckIcon width={9} height={14} />
            </Box>

            <Layout flexBasis={24} />

            <Box>
              <Text color='primary' fontSize='small' lineHeight='normal' textAlign='center'>
                <FormattedMessage id='form.success-message' />
              </Text>
            </Box>

            <Layout flexBasis={32} />
          </Column>

          <Layout flexBasis={20} />
        </Row>
      </Condition>
    </Box>
  )
}
