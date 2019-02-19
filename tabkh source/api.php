<?php
    include ("db.php");


    header("Access-Control-Allow-Origin: *");


    switch($_GET['action']) {

        case 'getcategory':
            $query = "select * from tbk_category ";
            $result = $db->query($query);

            $res['categorys'] = [];

            while($cat = $result->fetch_assoc()) {
                $cat['image'] = "http://localhost/tabkh/up/images/".$cat['image'];
                $res['categorys'][] = $cat;
            }


            echo json_encode($res);
        break;


        case 'getrecipes':
            
            $query = "select * from recipes ";
            $query .= " join recipes_category on recipes_category.id_recipe = recipes.id_recipe ";
            $query .= " join tbk_category on tbk_category.id_category = recipes_category.id_category ";
            $query .=" where 1=1 ";

            $cat = isset($_GET['cat']) ? $_GET['cat'] : false;

            if($cat != false) {
                $query .= " and tbk_category.id_category = ". $cat;
            }           

            $search = isset($_GET['search']) ? $_GET['search'] : false;

            if($search != false) {
                $query .= " and recipes.title like '%".$search."%'";
            }

            $res['recipes'] = [];

            $result = $db->query($query);

            while($row = $result->fetch_assoc()) {
                $row['image01'] = "http://localhost/tabkh/up/images/".$row['image01'];

                // ingridents
                $query_ingr = $db->query("select qyt, ingredient from ingredients where ingredients.id_recipe = ".$row['id_recipe']." order by oorder ");

                while($row_ingr = $query_ingr->fetch_assoc() ) {
                    $row['ingredient'][] = $row_ingr;
                }

                // steps
                $query_steps = $db->query("select method, oorder from methods where methods.id_recipe = ".$row['id_recipe']." order by oorder ");

                while($row_step = $query_steps->fetch_assoc() ) {
                    $row['steps'][] = $row_step;
                }

               $res['recipes'][] = $row;
            }

            echo json_encode($res);

        break;




    }

