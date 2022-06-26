import dynamic from 'next/dynamic'

const Components = {}

Components['Heading'] = dynamic(() => import('./Heading'))
Components['Paragraph'] = dynamic(() => import('./Paragraph'))

export default Components