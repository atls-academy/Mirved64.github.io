import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Button }         from '@ui/button'
import { Condition }      from '@ui/condition'
import { CheckIcon }      from '@ui/icons'
import { ArrowRightIcon } from '@ui/icons'
import { Input }          from '@ui/input'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Space }          from '@ui/text'
import { Text }           from '@ui/text'

import { FormProps }      from './form.interfaces'
import { useForm }        from './data'

export const Form: FC<FormProps> = ({ name, send, setSend, onClose, onChange }) => {
  const [message, setMessage] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const [display, setDisplay] = useState<boolean>(false)

  const form = useForm()

  const formData = form?.data?.allForms.nodes

  const handleChangeName = (userName) => {
    onChange(userName)
  }

  const handleSend = () => {
    setSend(true)

    setMessage('')
    setPhoneNumber('')
  }

  const handleClose = (e) => {
    onClose(e)
    setSend(false)
    onChange('')
  }

  return (
    <Box width={375} borderRadius='regular' overflow='hidden' backgroundColor='background.white'>
      <Condition match={!send}>
        <Layout flexBasis={20} flexShrink='0' />

        <Column>
          <Layout flexBasis={32} />

          <Input
            textarea
            value={message}
            onChange={setMessage}
            variant='common'
            size='textarea'
            placeholder={formData[6].forms.text}
            onClick={() => setDisplay(true)}
            filled={Boolean(message)}
            maxLength={500}
          />

          <Condition match={display}>
            <Layout flexBasis={12} />

            <Input
              value={name}
              onChange={handleChangeName}
              variant='common'
              size='bigSizeRegularRadii'
              placeholder={formData[5].forms.text}
              filled={Boolean(name)}
            />

            <Layout flexBasis={12} />

            <Input
              value={phoneNumber}
              onChange={setPhoneNumber}
              variant='common'
              size='bigSizeRegularRadii'
              placeholder={formData[4].forms.text}
              filled={Boolean(phoneNumber)}
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
              onClick={handleSend}
              disabled={!handleChangeName || !phoneNumber || !message}
            >
              <Text color='text.white' fontSize='small' lineHeight='normal'>
                {formData[3].forms.text}
              </Text>
            </Button>
          </Box>

          <Condition match={!!message && !!handleChangeName && !!phoneNumber}>
            <Layout flexBasis={24} />

            <Box display='inline'>
              <Text display='inline' color='primaryTransparent' fontSize='tiny' lineHeight='huge'>
                {formData[2].forms.text}
              </Text>

              <Space />

              <Text
                style={{ textDecoration: 'underline' }}
                display='inline'
                color='primaryTransparent'
                fontSize='tiny'
                lineHeight='huge'
              >
                {formData[1].forms.text}
              </Text>
            </Box>
          </Condition>

          <Layout flexBasis={32} />
        </Column>

        <Layout flexBasis={20} flexShrink='0' />
      </Condition>

      <Condition match={send}>
        <Row>
          <Layout flexBasis={20} flexShrink='0' />

          <Column alignItems='center'>
            <Layout flexBasis={32} />

            <Box width={48} justifyContent='center' alignItems='center' onClick={onClose}>
              <Button
                variant='navyBackgroundWhiteText'
                size='usualSizeNormalRadii'
                icon={<CheckIcon width={16} height={16} />}
                widthIcon={48}
                heightIcon={48}
                radiiIcon='normal'
                onClick={handleClose}
              />
            </Box>

            <Layout flexBasis={24} />

            <Box width={335}>
              <Text color='primary' fontSize='small' lineHeight='normal' textAlign='center'>
                {formData[0].forms.text}
              </Text>
            </Box>

            <Layout flexBasis={32} />
          </Column>

          <Layout flexBasis={20} flexShrink='0' />
        </Row>
      </Condition>
    </Box>
  )
}
