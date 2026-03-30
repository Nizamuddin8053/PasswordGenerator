pipeline {
    agent any

    // nothing added 

    environment {
        VERCEL_TOKEN = credentials('password-vercel-token')
        EMAIL_TO = 'Nizamuddin8053@gmail.com'
        
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Nizamuddin8053/PasswordGenerator.git'
            }
        }

        stage('Install Vercel CLI') {
            steps {
                bat 'npm install -g vercel'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                bat '''
                vercel --prod --token=%VERCEL_TOKEN% --confirm
                '''
            }
        }
    }

    post {
        success {
            mail to: "${env.EMAIL_TO}",
                 subject: "✅ Deployment Successful",
                 body: "Your Password Generator app deployed successfully 🚀"
        }

        failure {
            mail to: "${env.EMAIL_TO}",
                 subject: "❌ Deployment Failed",
                 body: "Deployment failed ❌ Check Jenkins logs."
        }
    }
}