var dataSetList = [
  {
    id: 2,
    userId: '1',
    name: 'FoodMart_Sample',
    categoryName: 'Default Category',
    userName: 'Administrator',
    loginName: 'admin',
    createTime: '2019-09-22 17:29:47.0',
    updateTime: '2019-09-22 17:29:47.0',
    data: {
      schema: {
        measure: [
          {
            column: 'store_cost',
            id: 'da02ba11-30d0-4b03-9b12-5b19edc5d7c6',
            type: 'column',
          },
          {
            column: 'store_sales',
            id: '12b42233-b0e7-418f-8f68-d36d227d41d1',
            type: 'column',
          },
          {
            column: 'unit_sales',
            id: '1f429f76-cbf9-4391-80a2-4d4d3b449a66',
            type: 'column',
          },
        ],
        // 维度列：列维度、行维度
        dimension: [
          {
            columns: [
              {
                column: 'SALES_COUNTRY',
                alias: 'country',
                id: '4abf2747-3024-44bc-88ef-3cc2643d2b09',
                type: 'column',
              },
              {
                column: 'SALES_REGION',
                alias: 'region',
                id: '9f85f220-3728-468c-8e0e-a5e88a3a9b23',
                type: 'column',
              },
              {
                column: 'SALES_DISTRICT',
                alias: 'district',
                id: 'b0c8d29b-9f53-41d4-95b7-132f1e4c876b',
                type: 'column',
              },
            ],
            alias: 'Geo',
            id: '618953e0-d71c-41a4-8dee-a6748fe92bbd',
            type: 'level',
          },
          {
            columns: [
              {
                column: 'the_year',
                alias: 'year',
                id: 'a8d4b079-5074-4ddc-9379-074dadc76c90',
                type: 'column',
              },
              {
                column: 'month_of_year',
                alias: 'month',
                id: 'f3e89458-0931-4820-ba45-d2c02b2e6bd7',
                type: 'column',
              },
              {
                column: 'day_of_month',
                alias: 'day',
                id: '7cb06baf-c95d-4da3-a47d-74c70f068fc9',
                type: 'column',
              },
              {
                column: 'the_date',
                id: 'ba7bcba4-59b7-452e-b3b4-1329a65b5158',
                type: 'column',
              },
            ],
            alias: 'Date',
            id: '6a82cfd1-97a0-4118-b000-6f69c227959d',
            type: 'level',
          },
          {
            column: 'gender',
            id: '6126fe19-f123-42d6-be3e-ce0bcac9b44d',
            type: 'column',
          },
        ],
      },
      datasource: 1,
      query: {
        sql:
          'SELECT    \r\n       b.the_year + 5 AS the_year, b.month_of_year, b.day_of_month,\r\n       date_add(b.the_date, interval 5 year) AS the_date,\r\n       r.SALES_DISTRICT, r.SALES_REGION, r.SALES_COUNTRY,\r\n       d.yearly_income, d.total_children, d.member_card, d.num_cars_owned, d.gender,\r\n       a.store_sales, a.store_cost, a.unit_sales\r\n  FROM foodmart2.sales_fact_sample a\r\n  JOIN foodmart2.time_by_day b ON a.time_id = b.time_id\r\n  JOIN foodmart2.store c ON a.store_id = c.store_id\r\n  JOIN foodmart2.region r ON c.REGION_ID = r.REGION_ID\r\n  JOIN foodmart2.customer d ON a.CUSTOMER_ID = d.CUSTOMER_ID\r\n WHERE SALES_COUNTRY IS NOT NULL',
      },
      filters: [
        {
          filters: [
            {
              col: 'the_date',
              values: ["{now('M', -2, 'yyyy-MM-dd')}"],
              type: '>',
            },
          ],
          id: '405f1bd3-758b-4025-b6c1-e3807a3ab000',
          group: 'last6months',
        },
      ],
      expressions: [
        {
          alias: 'UnitSales',
          id: '1810a1d1-0fc3-455f-a9bc-43aaaac26eb9',
          type: 'exp',
          exp: 'sum(store_sales)/sum(unit_sales)',
        },
      ],
    },
    edit: false,
    delete: false,
  },
  {
    id: 7,
    userId: '1',
    name: 'Map_Sample',
    categoryName: 'Default Category',
    userName: 'Administrator',
    loginName: 'admin',
    createTime: '2019-09-22 17:29:47.0',
    updateTime: '2019-09-22 17:29:47.0',
    data: {
      schema: {
        // 指标列
        measure: [
          {
            column: 'cnt',
            id: 'f35c040b-4410-429a-ba69-260af846b52f',
            type: 'column',
          },
        ],
        // 维度
        dimension: [
          {
            columns: [
              {
                column: 'province',
                id: '983188c3-ade1-48ee-8d33-53239ae271bf',
                type: 'column',
              },
              {
                column: 'city',
                id: '0526c056-c57c-486f-aa00-525f74d93c3e',
                type: 'column',
              },
              {
                column: 'district',
                id: 'f25bf8d7-4789-4252-98b0-b3a5679f6548',
                type: 'column',
              },
            ],
            alias: 'GEO',
            id: 'a89157b2-0bfa-4221-90c3-09cd44a5be39',
            type: 'level',
          },
          {
            column: 'wind_level',
            id: '81955bba-5745-42dc-8e7a-d0c6db31c858',
            type: 'column',
          },
          {
            column: 'wind_direct',
            id: '95cfeadc-1562-4577-a638-452d778e2f20',
            type: 'column',
          },
        ],
      },
      datasource: 1,
      query: {
        sql: 'SELECT * FROM foodmart2.map_data_sample;',
      },
      filters: [],
      expressions: [
        {
          alias: 'cc',
          id: 'd26880aa-ea42-454b-97c0-511f34791889',
          type: 'exp',
          exp: 'count(city)',
        },
      ],
    },
    edit: false,
    delete: false,
  },
];
