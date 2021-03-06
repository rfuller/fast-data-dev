var runningServices = [
  {
    "name" : "Confluent v3.0.1 - Kafka v0.10.0.1",
    "description" : "1 broker, including kafka connect distributed, schema registry, kafka rest, etc"
  },
  {
    "name" : "Landoop Kafka Topics UI v0.8.1",
    "description" : "Browse Kafka topics and understand what's happening on your cluster. Find topics / view topic metadata / browse topic data (kafka messages) / view topic configuration / download data."
  },
  {
    "name" : "Landoop Schema Registry UI v0.8.0",
    "description" : "This is a web tool for the confluentinc/schema-registry in order to create / view / search / evolve / view history & configure Avro schemas of your Kafka cluster."
  },
  {
    "name" : "Landoop Kafka Connect UI v0.8.1",
    "description" : "This is a web tool for Kafka Connect for setting up and managing connectors for multiple connect clusters."
  },
  {
    "name" : "Datamountaineer Stream Reactor v0.2.3",
    "description" : "Source & Sink connectors supporting KCQL. ElasticSearch, Cassandra, Redis etc"
  }
];

var servicesInfo = [
  {
    "name" : "Kafka Broker",
    "port" : "9092",
    "url"  : "localhost"
  },
  {
    "name" : "Schema Registry",
    "port" : "8081",
    "url"  : "http://localhost"
  },
  {
    "name" : "Kafka REST Proxy",
    "port" : "8082",
    "url"  : "http://localhost"
  },
  {
    "name" : "Kafka Connect Distributed",
    "port" : "8083",
    "url"  : "http://localhost"
  },
  {
    "name" : "ZooKeeper",
    "port" : "2181",
    "url"  : "localhost"
  },
  {
    "name" : "Web Server",
    "port" : "3030",
    "url"  : "http://localhost"
  }
];
