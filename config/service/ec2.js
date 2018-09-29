export default {
  key: 'ec2',
  name: 'EC2',
  description: '仮想サーバー',
  color: 'orange',
  multiple: true,
  table: [
    {
      type: 'select',
      key: 'instance',
      title: 'インスタンス',
      default: 't2.nano',
      mod: 'large',
      parseJson: json => json.ec2.instance.map(instance => instance.attributes.instanceType)
    },
    {
      type: 'number',
      key: 'unit',
      title: '台数',
      mod: 'small'
    },
    {
      type: 'number',
      key: 'storage',
      title: 'ストレージ(GB)'
    },
    {
      type: 'number',
      key: 'transfer',
      title: 'データ転送量(GB)'
    }
  ]
}
