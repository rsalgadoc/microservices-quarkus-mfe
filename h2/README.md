# H2

docker run -d -p 1521:1521 -p 81:81 -v ${PWD}:/opt/h2-data -e H2_OPTIONS="-ifNotExists" --name=MyH2Instance oscarfonts/h2


http://localhost:81/

