pipeline {
    agent any


    environment {
        VERCEL_TOKEN = credentials('password-vercel-token')
        // EMAIL_TO = 'Nizamuddin8053@gmail.com'
        
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Nizamuddin8053/PasswordGenerator.git'
            }
        }

        

        stage('Deploy to Vercel') {
          steps {
            bat '''
              npx vercel pull --yes --environment=production --token=%VERCEL_TOKEN%
              npx vercel build --prod --token=%VERCEL_TOKEN%
              npx vercel deploy --prebuilt --prod --token=%VERCEL_TOKEN%
            '''
           }
        }
    }

    // post {
    //     success {
    //         mail to: "${env.EMAIL_TO}",
    //              subject: "✅ Deployment Successful",
    //              body: "Your Password Generator app deployed successfully 🚀"
    //     }

    //     failure {
    //         mail to: "${env.EMAIL_TO}",
    //              subject: "❌ Deployment Failed",
    //              body: "Deployment failed ❌ Check Jenkins logs."
    //     }
    // }
}