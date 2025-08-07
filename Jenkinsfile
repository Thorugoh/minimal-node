pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Thorugoh/minimal-node.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        failure {
            echo 'Build failed due to test failure'
        }
    }
}