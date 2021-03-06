<template>
  <article class="service">
    <ServiceTemplateTitle :service="service.elb" />
    <div class="section">
      <h2 class="title-section">
        <span>料金を計算</span>
      </h2>
      <div
        class="service-inside"
        :data-test="serviceName"
        v-for="serviceName in ['alb', 'nlb', 'clb']"
        :key="serviceName"
      >
        <ServiceTemplateLabel :label="service[serviceName].fullname" />
        <ServiceTemplateCalc :service="service[serviceName]" />
      </div>
    </div>

    <ServiceTemplateAds />

    <div class="section">
      <h2 class="title-section">
        <span>ざっくりわかるELB</span>
      </h2>
      <div class="service-zakuri">
        <div class="section-child">
          <p class="text">トラフィックを分散してくれるやつ（ロードバランサー）。</p>

          <table class="spec">
            <tbody>
              <tr>
                <th>ALB</th>
                <td>高機能・HTTP/HTTPS(L7)</td>
              </tr>
              <tr>
                <th>NLB</th>
                <td>シンプル・TCP(L4)</td>
              </tr>
              <tr>
                <th>CLB</th>
                <td>旧世代・L4/L7</td>
              </tr>
            </tbody>
          </table>

          <p class="text">
            ALBは、HTTPのヘッダーを見てくれるので、ホストやパスなどに基づいたルーティングができます。
            <br class="pc" />
            NLBは、そこら辺の余計な処理をせずに分散してくれるので高速に動作します。
            <br class="pc" />
            旧世代のCLBに関しては、L7がALB、L4がNLBに相当するので、新規で使うメリットは少ないでしょう。
          </p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="title-section"><span>補足と前提</span></h2>
      <div class="service-summary accordion-list">
        <ServicePartsAccordion title="入力項目の補足">
          <section class="section-child">
            <h3 class="title-small"><span>台数</span></h3>
            <p class="text">利用するロードバランサーの台数を入力してください。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>データ転送量</span></h3>
            <p class="text">ロードバランサーで処理されるデータ量の合計をGB単位で入力してください。</p>
            <p class="text">
              Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。
            </p>
            <pre>2 * 100000 / 1024 ≒ 195GB</pre>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>LCU</span></h3>
            <p class="text">Load Balancer Capacity Unit(LCU)を入力してください。</p>
            <p class="text">
              名前だけではピンときませんが、単位時間あたりの接続数や帯域幅をもとに算出される数値です。このサイトでざっくりした説明するのは難しいので、<ExternalLink
                href="https://aws.amazon.com/jp/elasticloadbalancing/pricing/"
                >公式の料金表</ExternalLink
              >を参考に算出していただくか、<ExternalLink href="https://calculator.s3.amazonaws.com/index.html"
                >公式のツール</ExternalLink
              >をお使いください。
            </p>
          </section>
        </ServicePartsAccordion>
        <ServicePartsCondition></ServicePartsCondition>
      </div>
    </div>
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateLabel from '@/components/service/template/ServiceTemplateLabel'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import serviceConfigELB from '@/config/service/elb'
import serviceConfigCLB from '@/config/service/clb'
import serviceConfigALB from '@/config/service/alb'
import serviceConfigNLB from '@/config/service/nlb'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceELB',
  components: {
    ServiceTemplateTitle,
    ServiceTemplateLabel,
    ServiceTemplateCalc,
    ServiceTemplateAds,
    ServicePartsAccordion,
    ServicePartsCondition,
    ExternalLink
  },
  head() {
    return meta.elb
  },
  data() {
    return {
      service: {
        elb: serviceConfigELB,
        clb: serviceConfigCLB,
        alb: serviceConfigALB,
        nlb: serviceConfigNLB
      }
    }
  }
}
</script>
