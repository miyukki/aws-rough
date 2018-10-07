export default {
  key: 'elasticache',
  name: 'ElastiCache',
  description: 'インメモリ',
  color: 'blue',
  multiple: true,
  table: [
    {
      type: 'select',
      key: 'instance',
      title: 'ノードタイプ',
      default: 'cache.t2.micro',
      mod: 'large',
      parseJson: json => json.elasticache.instance.map(instance => instance.instanceType)
    },
    {
      type: 'number',
      key: 'unit',
      title: 'ノード数',
      mod: 'small'
    }
  ]
}
