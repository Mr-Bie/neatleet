@echo off
setlocal enabledelayedexpansion
set /p project_name=Enter the project name:

:: Replace spaces with hyphens
set "project_name=!project_name: =-!"

:: Replace "." with nothing
set "project_name=!project_name:.=!"

:: Call the subroutine to convert to lowercase
call :LoCase project_name

if not exist %project_name% (
    mkdir %project_name%
    cd %project_name%
    type nul > index.js
) else (
    cd %project_name%
)
    @echo off
    start npx nodemon index.js
    code .
	

:: Subroutine to convert a variable to lowercase
:LoCase
SET %~1=!%~1:A=a!
SET %~1=!%~1:B=b!
SET %~1=!%~1:C=c!
SET %~1=!%~1:D=d!
SET %~1=!%~1:E=e!
SET %~1=!%~1:F=f!
SET %~1=!%~1:G=g!
SET %~1=!%~1:H=h!
SET %~1=!%~1:I=i!
SET %~1=!%~1:J=j!
SET %~1=!%~1:K=k!
SET %~1=!%~1:L=l!
SET %~1=!%~1:M=m!
SET %~1=!%~1:N=n!
SET %~1=!%~1:O=o!
SET %~1=!%~1:P=p!
SET %~1=!%~1:Q=q!
SET %~1=!%~1:R=r!
SET %~1=!%~1:S=s!
SET %~1=!%~1:T=t!
SET %~1=!%~1:U=u!
SET %~1=!%~1:V=v!
SET %~1=!%~1:W=w!
SET %~1=!%~1:X=x!
SET %~1=!%~1:Y=y!
SET %~1=!%~1:Z=z!
GOTO:EOF