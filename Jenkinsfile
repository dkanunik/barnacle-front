node {

    stage('Initialize env'){
        env.PATH = "/usr/local/bin/docker-compose:/usr/bin/mongorestore:${env.PATH}"
        env.NODEJS_HOME = "${tool 'node 8.14'}"
        env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stage('git checkout') {
        cleanWs()
        checkout scm
    }

    stage('Initialize NodeJS') {
        sh 'npm cache clean --force'
        sh 'npm install'
    }

    stage('Run Unit tests') {
        sh 'npm run test:unit'
    }

    stage('Process docker image') {
        sh 'docker build -t dkanunik/barnacle-front:latest .'
        withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
            sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
            sh 'docker push dkanunik/barnacle-front:latest'
        }
    }
}
